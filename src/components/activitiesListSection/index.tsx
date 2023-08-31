import { FC } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Button, Col, Typography } from 'antd'

import { getActivities } from '../../store/scheduledActivities'
import { ActivityDetailsCard } from '../activityDetailsCard'
import { ENDPOINTS } from '../../constants'

const { Title } = Typography

const StyledActivitiesListSection = styled(Col)`
  width: 800px;
  margin-bottom: 20px;
`

const StyledTitle = styled(Title)`
  text-align: center;
`

export const ActivitiesListSection: FC = () => {
  const { scheduledActivities } = useSelector(getActivities)

  const navigate = useNavigate()

  const handleNavigate = () => navigate(ENDPOINTS.ACTIVITES_PAGE)

  return (
    <StyledActivitiesListSection
      xs={24}
      sm={24}
      md={24}
      lg={14}
      xl={14}
      xxl={14}
    >
      <StyledTitle level={2}>
        {scheduledActivities.length > 0
          ? 'Upcoming Schedule'
          : 'No Scheduled Activities'}
      </StyledTitle>

      {scheduledActivities?.length
        ? scheduledActivities
            .slice(0, 3)
            .map((scheduledActivities) => (
              <ActivityDetailsCard scheduledActivities={scheduledActivities} />
            ))
        : null}

      {scheduledActivities?.length > 3 ? (
        <Button type="link" onClick={handleNavigate}>
          See all...
        </Button>
      ) : null}
    </StyledActivitiesListSection>
  )
}
