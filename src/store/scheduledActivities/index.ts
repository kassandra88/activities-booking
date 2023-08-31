import { v4 as uuidv4 } from 'uuid'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '..'
import { ScheduledActivities } from '../../types'

interface ScheduledActivitiesState {
  scheduledActivities: ScheduledActivities[]
}

const initialState: ScheduledActivitiesState = {
  scheduledActivities: [],
}

const scheduledActivitiesReducer = createSlice({
  name: 'scheduledActivities',
  initialState,
  reducers: {
    addActivity: (state, action: PayloadAction<ScheduledActivities>) => {
      state.scheduledActivities.push({
        ...action.payload,
        id: uuidv4(),
      })
    },
  },
})
export const { addActivity } = scheduledActivitiesReducer.actions

export const getActivities = (state: RootState) => state.scheduledActivities

export default scheduledActivitiesReducer.reducer
