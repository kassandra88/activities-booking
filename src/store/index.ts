import { configureStore } from '@reduxjs/toolkit'

import scheduledActivitiesReducer from './scheduledActivities'

export const store = configureStore({
  reducer: {
    scheduledActivities: scheduledActivitiesReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
