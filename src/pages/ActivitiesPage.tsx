import { FC } from 'react'

import { Layout } from '../components/layout'
import { UserActivitiesDashboard } from '../components/userActivitiesDashboard'

export const ActivitiesPage: FC = () => (
  <Layout>
    <UserActivitiesDashboard />
  </Layout>
)
