# Glossary

Definition of terms used in the source code and documentation.

## Events

**Standalone Event**: An event that has a datetime and is NOT recurring.

**Grid Event**: An event that is assigned to a specific time slot on the calendar in the grid.

**Draft Event**: A calendar event that has pending changes that have not yet been persisted to the database. When a user makes changes to an event in the form, or drags the event, or resizing its times, the user is operating on a draft event. After the user clicks "Save", the draft event is persisted to the database, and the Draft Event goes away and is replaced with the Event.

**Someday Event**: These have `startDate` and `endDate` like regular timed events, but they have not yet been assigned to a specific time slot on the calendar in the grid. Instead, they are stored in the sidebar. These may be recurring or standalone.

**Base Event**: A _recurring_ event that is recurring and has the series `RRULE` in the `recurrence` field.

**Instance Event**: A _recurring_ event that is an instance of the base event.

## Other

**Calendar**: A calendar is a collection of events. It is the main object in the application.

**Calendar List**: AKA sub-calendars. A calendar list is a collection of calendars.

**Calendar View**: A calendar view is a way to view a calendar. For example:

- Day view
- Agenda view
- Week view
- Month view
- Year view

**Sync**: The Compass feature that allows users to sync their calendar data with other calendars like Google Calendar.
