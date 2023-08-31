import dayjs from 'dayjs'
import { FC } from 'react'
import { FcPlanner } from 'react-icons/fc'
import styled from 'styled-components'
import { Card, Row, Typography } from 'antd'

import { ScheduledActivities } from '../../types'
import { LOCAL_DATE_FORMAT } from '../../constants'

const { Text } = Typography

const StyledActivityCardTitle = styled(Text)`
  margin-left: 12px;
`

const StyledDetailsText = styled(Text)`
  font-size: 16px;
`

type ActivityDetailsCardPropsType = {
  scheduledActivities: ScheduledActivities
}

export const ActivityDetailsCard: FC<ActivityDetailsCardPropsType> = ({
  scheduledActivities,
}) => {
  const { title, startDate, endDate } = scheduledActivities

  return (
    <Card
      title={
        <Row align="middle">
          <FcPlanner />
          <StyledActivityCardTitle>{title}</StyledActivityCardTitle>
        </Row>
      }
    >
      <StyledDetailsText>
        Activity from {dayjs(startDate).format(LOCAL_DATE_FORMAT)} to {`  `}
        {dayjs(endDate).format(LOCAL_DATE_FORMAT)}
      </StyledDetailsText>
    </Card>
  )
}
