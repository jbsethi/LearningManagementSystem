import { lazy } from 'react'

import DashboardIcon from '@mui/icons-material/Dashboard';
import CampaignIcon from '@mui/icons-material/Campaign';
import NightShelterIcon from '@mui/icons-material/NightShelter';

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
  },
  {
    path: '/hostel',
    component: lazy(() => import('../pages/hostel')),
    exact: true,
    meta: {
      name: 'Hostel',
      icon: <NightShelterIcon />,
      nav: true,
    }
  },
  {
    path: '/notice-board',
    component: lazy(() => import('../pages/notice-board')),
    exact: true,
    meta: {
      name: 'Notice Board',
      icon: <CampaignIcon />,
      nav: true,
    }
  }
]

export default routes