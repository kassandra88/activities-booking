export interface Id {
  id?: string
}

export interface ScheduledActivities extends Id {
  title: string
  startDate: string
  endDate: string
}
