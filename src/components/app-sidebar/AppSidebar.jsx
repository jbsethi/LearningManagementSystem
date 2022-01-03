import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'

import Drawer from './Drawer'
import routes from '../../routes'

const listItems = (
  routes
    .filter(route => route.meta.nav)
    .map((route, rIdx) => {
      return (
        <ListItemButton key={rIdx}>
          <ListItemIcon>
            {route.meta.icon}
          </ListItemIcon>
          <ListItemText primary={route.meta.name} />
        </ListItemButton>
      )
    })
)

const AppSidebar = ({ open, toggleDrawer, drawerWidth }) => {
  return (
    <Drawer variant="permanent" open={open} width={drawerWidth} >
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: [1],
        }}
      >
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>

      <Divider />

      <List>
        {listItems}
      </List>
    </Drawer>
  )
}

export default AppSidebar
