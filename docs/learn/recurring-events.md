# Recurring Events

## Core Concepts

### What is a Recurring Event?

A recurring event in Google Calendar consists of:

- **Base event** that defines the pattern (e.g., "Weekly Meeting every Monday at 2pm")
  - Base event: has `recurrence.eventId` AND `recurrence.rule` (e.g., "RRULE:FREQ=WEEKLY")
  - `recurrence.eventId` === `gEventId`
- **Instances**: Individual occurrences that follow that pattern (e.g., individual meetings on specific Mondays)
  - Instance: has `recurrence.eventId` AND NOT `recurrence.rule`
- **Recurrence Rule**: Defines how the event repeats (frequency, interval, exceptions)
- **Original Start Time**: The time an instance was originally scheduled for (important when instances are modified)

Think of it like a template (base event) that generates individual events (instances) based on a rule.

### Event Relationships

```mermaid
graph TD
    subgraph "Event Relationships"
        Base[Base Event] -->|generates| Instances[Instances]
        Base -->|has| Rule[Recurrence Rule]
        Instances -->|link to| Base
        Instances -->|have| OriginalTime[Original Start Time]

        BaseEvent[Base Event<br>ID: 123]
        InstanceEvent[Instance Event<br>ID: 123_20250323T120000Z]
        ModifiedBase[Modified Base<br>ID: 123_R20250323T120000Z]
    end
```

## Common Operations

### Creating a Recurring Event

When a user creates a recurring event:

1. Google Calendar creates a base event with a recurrence rule
2. The base event serves as a template for generating instances
3. Instances are generated based on the rule (e.g., weekly, daily, monthly)

### Modifying Recurring Events

There are three main ways to modify a recurring event:

1. **Edit One Instance**

   - Changes only a specific occurrence
   - The instance becomes "customized" and no longer follows the base event's pattern
   - Other instances remain unchanged

2. **Edit This and Following**

   - Changes an instance and all future instances
   - Creates a new series starting from the modified instance
   - Original series ends before the modified instance
   - Think of it like splitting a series into two parts

3. **Edit All Instances**
   - Changes the entire series
   - Creates a new series with the updated pattern
   - Original series is ended
   - All instances are updated to match the new pattern

### Deleting Recurring Events

There are three ways to delete recurring events:

1. **Delete One Instance**

   - Removes a single occurrence
   - Other instances remain unchanged
   - The instance is marked as "cancelled"

2. **Delete This and Following**

   - Removes an instance and all future instances
   - Original series ends before the deleted instance
   - Similar to "Edit This and Following" but with deletion

3. **Delete All Instances**
   - Removes the entire series
   - All instances are marked as "cancelled"
   - Base event is removed

## Technical Details

### Event Identification

Google Calendar uses specific ID patterns to identify events:

- Base events: Simple IDs (e.g., `123`)
- Instances: IDs with timestamps (e.g., `123_20250323T120000Z`)
- New base events after modifications: IDs with `_R` suffix (e.g., `123_R20250323T120000Z`)

### Recurrence Rules

- Use the RRULE format (e.g., `RRULE:FREQ=WEEKLY`)
- Can include exceptions and modifications
- `UNTIL` rule indicates when a series ends
- Rules can be complex (e.g., "every other Monday except holidays")

### Relationships Between Events

- Instances link to their base event via `recurringEventId`
- Modified instances keep their `originalStartTime`
- `iCalUID` remains constant across modifications

## Common Pitfalls

1. **Instance Modifications**

   - Modified instances become independent of the base event
   - They need to be tracked separately
   - Original start time is crucial for identification

2. **Series Splits**

   - When editing "this and following", you get two series
   - Need to handle both the ending of the old series and creation of the new one
   - Timing of the split is important

3. **Deletion Handling**
   - Cancelled instances still exist in the API
   - Need to distinguish between different types of deletions
   - Series modifications can look similar to deletions

## Best Practices

1. **Always Track Original Times**

   - Keep track of original start times for instances
   - Helps identify instances even after modifications

2. **Handle Series Modifications Carefully**

   - Check for UNTIL rules to identify series endings
   - Look for new base events with `_R` suffix
   - Preserve original series data until new series is confirmed

3. **Consider Performance**

   - Limit instance expansion to reasonable time windows
   - Batch database operations when possible
   - Cache frequently accessed series data

4. **Error Handling**
   - Validate recurrence rules
   - Handle missing or malformed data gracefully
   - Consider timezone implications

## Common Questions

1. **Why do we need both base events and instances?**

   - Base events define the pattern
   - Instances represent actual occurrences
   - Allows for individual instance modifications

2. **What happens when an instance is modified?**

   - It becomes independent of the base event
   - Original start time is preserved
   - Other instances remain unchanged

3. **How do we handle series splits?**

   - Original series ends before the split point
   - New series starts from the split point
   - Both series need to be managed

4. **Why keep cancelled instances?**
   - Helps maintain history
   - Allows for potential restoration
   - Maintains relationships between events

## Synchronization Workflow

### Overview

Synchronizing recurring events with Google Calendar involves:

1. Initial setup and watching for changes
2. Receiving notifications when changes occur
3. Fetching the changed events
4. Analyzing the changes
5. Updating your database accordingly

### Initial Setup

1. **Watch for Changes**

   - Set up a webhook to receive notifications from Google Calendar
   - Store the `nextSyncToken` from the initial sync
   - This token is crucial for incremental updates

2. **Initial Sync**
   - Fetch all events for the calendar
   - Store the final `nextSyncToken` for future use
   - This establishes your baseline state

### Change Detection

When changes occur in Google Calendar:

1. **Notification Received**

   - Google sends a notification to your webhook
   - The notification indicates which calendar changed
   - No event details are included in the notification

2. **Fetch Changes**
   - Use the stored `nextSyncToken` to fetch only changed events
   - Google returns:
     - Modified events
     - New events
     - Deleted events (marked as "cancelled")
     - A new `nextSyncToken` for the next sync

```mermaid
sequenceDiagram
    participant User
    participant Google
    participant Webhook
    participant App
    participant DB

    Note over User,DB: Initial Setup
    User->>Google: Create Recurring Event
    Google->>App: Send Notification
    App->>Google: Fetch Changes
    Google-->>App: Return Events + nextSyncToken
    App->>DB: Store Events & Token

    Note over User,DB: Sync Changes
    User->>Google: Modify Event
    Google->>Webhook: Send Notification
    Webhook->>App: Forward Notification
    App->>Google: Fetch Changes (with token)
    Google-->>App: Return Changes + new token
    App->>App: Analyze Changes
    App->>DB: Update Database
    App->>DB: Store new token
```

## Splitting Series

### Problem Summary

When users modify recurring events in Google Calendar using "this and following" operations, we need to handle the resulting series splits in our sync system. These splits can occur in two scenarios:

1. Delete "this and following" - splits the series and deletes future instances

2. Edit "this and following" - splits the series and creates a new series with modified properties

The challenge is that Google Calendar's API sends these changes in potentially multiple payloads, and we can't rely on receiving all related changes in a single payload or in a specific order.

### Solution Overview

Treat each change as an independent operation based on the event's properties, not on payload combinations or ID patterns. This approach is more reliable as it:

1. Uses documented API properties

2. Doesn't rely on payload ordering

3. Handles each change atomically

4. Works consistently across all operation types

### Approach

Whenever a series is split, delete the following instances

- Don't worry about what caused the split -- differentiating between editing 'this and following' vs deleting 'this and following'

Has recurrence with UNTIL? → Original series being split
Has recurringEventId? → Instance or new series
Has status: "cancelled"? → Cancelled instance
Has originalStartTime? → Modified instance

### Design Flow: Detecting Series Splits

```mermaid

graph TD

    A[Receive Google Calendar Event] --> B{Has recurringEventId?}

    B -->|Yes| C{Status = cancelled?}

    C -->|Yes| D[Delete Instance]

    C -->|No| E[Update Instance]

    B -->|No| F[Fetch Current State]

    F --> G{Is Series Split?}

    G -->|Yes| H[Update Original Series]

    G -->|No| I[Create/Update Series]



    H --> J[Delete Future Instances]

    I --> K[Generate New Instances]



    subgraph "Series Split Detection"

    G -->|Compare| L[UNTIL Dates]

    L -->|Earlier| G

    end

```

### Anti-Pattern Design Flow

We're sharing this flawed approach because it seems like a logical way to approach the problem, but it doesn't work. Do not do this.

```mermaid
graph TD
    subgraph "Sync Process"
        Watch[Watch for Changes] -->|1. Notification| Notify[Receive Notification]
        Notify -->|2. Fetch| Fetch[Fetch Changes]
        Fetch -->|3. Analyze| Analyze[Analyze Changes]
        Analyze -->|4. Update| Update[Update Database]
        Update -->|5. Store Token| Token[Store nextSyncToken]
    end

    subgraph "Change Types"
        Create[Create Series]
        EditOne[Edit One Instance]
        EditFuture[Edit This & Future]
        EditAll[Edit All Instances]
        DeleteOne[Delete Instance]
        DeleteAll[Delete Series]
    end

    Analyze -->|determines| Create
    Analyze -->|determines| EditOne
    Analyze -->|determines| EditFuture
    Analyze -->|determines| EditAll
    Analyze -->|determines| DeleteOne
    Analyze -->|determines| DeleteAll
```

The flawed assumption is that you will be able to determine the user's action based on the payloads
that you receive from Google Calendar after a notification is received. Unfortunately, this is not the case.
Google Calendar API batches changes, and does not return them in a way that corresponds to what
caused the change.

Because of this, you are better off treating each change as an independent operation, without regard
for what caused the change.
