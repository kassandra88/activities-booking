import { FC } from 'react'
import { useRoutes } from 'react-router-dom'

import { ENDPOINTS } from '../../../constants'
import { ActivitiesPage, HomePage } from '../../../pages'

export const getPublicRoutes = () => [
  {
    path: ENDPOINTS.HOME_PAGE,
    element: <HomePage />,
  },
  {
    path: ENDPOINTS.ACTIVITES_PAGE,
    element: <ActivitiesPage />,
  },
  {
    path: '*',
    element: <HomePage />,
  },
]

export const Routes: FC = () => {
  const routes = useRoutes([...getPublicRoutes()])

  return routes
}
