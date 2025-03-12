# Glossary

Definition of terms used in the source code and documentation.

**Event**: A calendar event that is already persisted to the database and is not being edited. When a user first views the calendar, the events they see are Events.

**Draft Event**: A calendar event that has pending changes that have not yet been persisted to the database. When a user makes changes to an event in the form, or drags the event, or resizing its times, the user is operating on a draft event. After the user clicks "Save", the draft event is persisted to the database, and the Draft Event goes away and is replaced with the Event.

**Calendar**: A calendar is a collection of events. It is the main object in the application.

**Calendar List**: AKA sub-calendars. A calendar list is a collection of calendars.

**Calendar View**: A calendar view is a way to view a calendar. For example:

- Day view
- Agenda view
- Week view
- Month view
- Year view


**Sync**: The Compass feature that allows users to sync their calendar data with other calendars like Google Calendar.