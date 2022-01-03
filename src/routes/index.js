import { lazy } from 'react'

import DashboardIcon from '@mui/icons-material/Dashboard';

const routes = [
  {
    path: '/',
    component: lazy(() => import('../pages/dashboard')),
    exact: true,
    meta: {
      name: 'Dashboard',
      icon: <DashboardIcon />,
      nav: true,
    }
  }
]

export default routes