import dayjs, { Dayjs } from 'dayjs'
import { useSelector } from 'react-redux'

import { getActivities } from '../store/scheduledActivities'

// Function to check if a given date is within a specified range
const isDateInRange = (date: Dayjs, start: Dayjs, end: Dayjs): boolean =>
  date.isBetween(start, end) || date.isSame(start) || date.isSame(end)

// Custom hook to get disabled dates
export const useDisabledDates = () => {
  const { scheduledActivities } = useSelector(getActivities)

  return (current: Dayjs): boolean => {
    if (!current || !scheduledActivities) return false

    const currentDate = dayjs().startOf('day')
    const currentStartOfDay = current.startOf('day')
    const currentEndOfDay = current.endOf('day')

    // Disable dates before today
    if (currentStartOfDay < currentDate) return true

    for (const { startDate, endDate } of scheduledActivities) {
      const activityStartDate = dayjs(startDate).startOf('day')
      const activityEndDate = dayjs(endDate).endOf('day')

      if (
        // Check if the current date range overlaps with an existing activity range
        isDateInRange(currentStartOfDay, activityStartDate, activityEndDate) ||
        isDateInRange(currentEndOfDay, activityStartDate, activityEndDate) ||
        isDateInRange(activityStartDate, currentStartOfDay, currentEndOfDay) ||
        isDateInRange(activityEndDate, currentStartOfDay, currentEndOfDay)
      ) {
        // If overlap is found, return true to indicate the date should be disabled
        return true
      }
    }

    // No overlap found, return false to indicate the date is not disabled
    return false
  }
}
