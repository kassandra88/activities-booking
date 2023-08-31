import { FC } from 'react'
import styled from 'styled-components'
import { Card, Col, Row } from 'antd'

import { BookingForm } from '../bookingForm'

const StyledFormSection = styled(Col)`
  width: 600px;
  height: 360px;

  form {
    width: 500px;
  }
`

const StyledTitle = styled.h1`
  text-align: center;
  margin-bottom: 36px;
  font-size: 24px;
  color: transparent;
  background: linear-gradient(to right, #1a237e, #2196f3);
  -webkit-background-clip: text;
  background-clip: text;
`

const StyledCard = styled(Card)`
  height: 100%;
`

export const BookingFormSection: FC = () => (
  <StyledFormSection xs={24} sm={24} md={24} lg={10} xl={10} xxl={10}>
    <StyledCard>
      <StyledTitle>Book Your Activities</StyledTitle>

      <Row justify="center">
        <BookingForm />
      </Row>
    </StyledCard>
  </StyledFormSection>
)
