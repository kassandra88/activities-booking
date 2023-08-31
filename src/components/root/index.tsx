import { BrowserRouter as Router } from 'react-router-dom'
import { FC, Suspense } from 'react'

import { Routes } from './routes'

export const Root: FC = () => (
  <Suspense fallback="Loading...">
    <Router>
      <Routes />
    </Router>
  </Suspense>
)
