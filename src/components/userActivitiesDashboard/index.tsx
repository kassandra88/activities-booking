import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Button, Col, Row, Typography } from 'antd'
import { FC, useCallback } from 'react'

import { ActivityDetailsCard } from '../activityDetailsCard'
import { getActivities } from '../../store/scheduledActivities'
import { ENDPOINTS } from '../../constants'

const { Title } = Typography

const StyledUserActivitiesDashboard = styled(Col)`
  margin-bottom: 20px;
`

const StyledTitle = styled(Title)`
  text-align: center;
`

export const UserActivitiesDashboard: FC = () => {
  const { scheduledActivities } = useSelector(getActivities)

  const navigate = useNavigate()

  const handleNavigate = useCallback(() => {
    navigate(ENDPOINTS.HOME_PAGE)
  }, [navigate])

  return (
    <>
      <Button type="link" onClick={handleNavigate}>
        Go Back...
      </Button>

      <StyledUserActivitiesDashboard xs={24}>
        <StyledTitle level={2}>
          {scheduledActivities.length > 0
            ? 'My Activities'
            : 'No Scheduled Activities'}
        </StyledTitle>

        <Row justify="center" gutter={[16, 16]}>
          {scheduledActivities?.map((scheduledActivities) => (
            <Col
              xs={24}
              sm={24}
              md={12}
              lg={12}
              xl={8}
              xxl={8}
              key={scheduledActivities.id}
            >
              <ActivityDetailsCard scheduledActivities={scheduledActivities} />
            </Col>
          ))}
        </Row>
      </StyledUserActivitiesDashboard>
    </>
  )
}
