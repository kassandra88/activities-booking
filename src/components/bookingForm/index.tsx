import dayjs from 'dayjs'
import { FC } from 'react'
import isBetween from 'dayjs/plugin/isBetween.js'
import { useDispatch } from 'react-redux'
import { Button, Col, Input, message, Form, Row, DatePicker } from 'antd'

import { addActivity } from '../../store/scheduledActivities'
import { DEFAULT_DATE_FORMAT } from '../../constants'
import { validationRules } from '../validators'
import { useDisabledDates } from '../../hooks'
import { useDateOverlap } from '../../hooks/useDateOverlap'

dayjs.extend(isBetween)

const { RangePicker } = DatePicker

export type InitialActivityValuesType = {
  title: string
  dateRange: dayjs.Dayjs[]
}

export const BookingForm: FC = () => {
  const disabledDates = useDisabledDates()

  const checkOverlap = useDateOverlap()

  const [form] = Form.useForm()

  const dispatch = useDispatch()

  const handleSubmitForm = (values: InitialActivityValuesType) => {
    if (checkOverlap(values)) {
      message.error(
        'Error: Dates are already occupied. Please choose different dates.',
      )
      return
    }

    dispatch(
      addActivity({
        ...values,
        startDate: values.dateRange[0]?.format(DEFAULT_DATE_FORMAT) || '',
        endDate: values.dateRange[1]?.format(DEFAULT_DATE_FORMAT) || '',
      }),
    )

    message.success('Your data has been saved successfully!')
    form.resetFields()
  }

  return (
    <Form form={form} onFinish={handleSubmitForm} layout="vertical">
      <Col>
        <Form.Item<InitialActivityValuesType>
          name="title"
          label="Activity Title"
          required
          rules={validationRules.titleRules}
        >
          <Input name="title" placeholder="Yoga Class" autoFocus />
        </Form.Item>
      </Col>

      <Col>
        <Form.Item
          name="dateRange"
          label="Activity Dates"
          required
          rules={validationRules.datesRules}
        >
          <RangePicker disabledDate={disabledDates} />
        </Form.Item>
      </Col>

      <Row justify="center">
        <Form.Item shouldUpdate>
          {() => (
            <Button
              className="submit-btn"
              type="primary"
              htmlType="submit"
              disabled={
                !form.isFieldsTouched(true) ||
                !!form.getFieldsError().filter(({ errors }) => errors.length)
                  .length
              }
            >
              Submit
            </Button>
          )}
        </Form.Item>
      </Row>
    </Form>
  )
}
