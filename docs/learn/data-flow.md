# Frontend Data Flow

## Big Picture

### Mental Model

Here is how I think about what pieces of the app are responsible for what

| Piece            | Responsibility                        | How                                                   | Where                         |
| ---------------- | ------------------------------------- | ----------------------------------------------------- | ----------------------------- |
| draft event      | Quick, understandable, testable       | minimal schema                                        | draft functions               |
| event (frontend) | exhaustive copy of event from backend | normalizes GET response, exhaustive schema            | Redux store                   |
| middleware       | convert draft -> regular event        | adds/derives values & validates against types/schemas | frontend typescript functions |
| event (backend)  | validates event and persists          | zod, node, mongoDB, exhaustive schema                 | /backend package              |

Visual summary of the above:
![DataFlow.png](./assets/data-flow.png)

For more context about this pattern, see [this PR discussion](https://github.com/SwitchbackTech/compass/pull/215#pullrequestreview-2540323757)

## Redux Data Flow

The frontend uses Redux, Redux Saga, and React to manage state.
It can be difficult to understand how all of this fits together.
This might help.

### On Startup

#### Store & Dispatch initialized

`ducks/events/slice.ts`

- each slice is initialized with name, props, and reducer
- all slices/reducers are combined into an `eventsReducer`
  ->
  `store/reducers.ts`
- those events reducers are added to the global `reducers` object
  ->
  `store/index.ts`
- adds all those reducers to the redux store
- uses store to init `RootState` and `AppDispatch`

### Runtime - Events

`useWeek.ts`

- imports the global dispatch from the redux store
- on render:
  - gets all week events: `getWeekEventsSlice.actions.request(...)`
- on submit:
  - if event exists (has an id): updates:
    - `editEventSlice.actions.request(...)`
  - if event doesn't exist: creates:
    - `createEventSlice.actions.request(...)`
- > (somehow knows to go to sagas ...)

`sagas.ts`

- Getting Events:
  - `getWeekEventsSaga()` -> `getEventsSaga` using this week as params
    ->
    `events/api.ts` - `eventsApi.getEvents` - uses `getEventsHelper()` to get events
- Creating Event:
  - `createEventSaga()` triggered
  - calls `eventsApi.createEvent`
    ->
    `ducks/events/api.ts` - `eventsApi.createEvent`: - creates event - creates new id, adds to running list of events in localStorage

### Runtime - Someday List

#### Frontend finds someday events

`EventsList` calls `getEvents()` on load

`SidebarEventContainer` - `mapStateToProps` -> `selectors.ts`

- finds event from `entities` slice
