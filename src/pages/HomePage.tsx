import { FC } from 'react'

import { Layout } from '../components/layout'
import { BookingFormSection } from '../components/bookingFormSection'
import { ActivitiesListSection } from '../components/activitiesListSection'

export const HomePage: FC = () => (
  <Layout>
    <BookingFormSection />

    <ActivitiesListSection />
  </Layout>
)
