import { lazy } from 'react'

import DashboardIcon from '@mui/icons-material/Dashboard';
import CampaignIcon from '@mui/icons-material/Campaign';
import NightShelterIcon from '@mui/icons-material/NightShelter';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

import { importPage } from '../utils/common'

const routes = [
  {
    path: '/',
    component: lazy(importPage('dashboard')),
    exact: true,
    meta: {
      name: 'Dashboard',
      icon: <DashboardIcon />,
      nav: true,
    }
  },
  {
    path: '/students',
    component: lazy(importPage('students')),
    exact: false,
    meta: {
      name: 'Students',
      icon: <PeopleAltIcon />,
      nav: true,
    }
  },
  {
    path: '/hostel',
    component: lazy(importPage('hostel')),
    exact: true,
    meta: {
      name: 'Hostel',
      icon: <NightShelterIcon />,
      nav: true,
    }
  },
  {
    path: '/notice-board',
    component: lazy(importPage('notice-board')),
    exact: true,
    meta: {
      name: 'Notice Board',
      icon: <CampaignIcon />,
      nav: true,
    }
  }
]

export default routes