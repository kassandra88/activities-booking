import dayjs from 'dayjs'
import { useSelector } from 'react-redux'
import { getActivities } from '../store/scheduledActivities'
import { InitialActivityValuesType } from '../components/bookingForm'

// Custom hook to check for date overlaps
export const useDateOverlap = () => {
  const { scheduledActivities } = useSelector(getActivities)

  return (values: InitialActivityValuesType) => {
    if (values) {
      const { dateRange } = values

      const startNewDate = dayjs(dateRange[0])
      const endNewDate = dayjs(dateRange[1])

      scheduledActivities.forEach(({ startDate, endDate }) => {
        // Check if newly added date range overlaps with existing range
        if (
          (startNewDate <= dayjs(endDate) && endNewDate >= dayjs(startDate)) ||
          (startNewDate >= dayjs(startDate) && endNewDate <= dayjs(endDate))
        ) {
          // Set overlapExists to true if overlap is found
          return true
        }
      })

      return false
    }
    return false
  }
}
