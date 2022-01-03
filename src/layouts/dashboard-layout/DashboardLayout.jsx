import { useState, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

import AppHeader from '../../components/app-header';
import AppSidebar from '../../components/app-sidebar';
import routes from '../../routes'

const drawerWdith = 240;

function DashboardContent() {
  const [open, setOpen] = useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppHeader drawerWidth={drawerWdith} open={open} toggleDrawer={toggleDrawer} />
      <AppSidebar drawerWidth={drawerWdith} open={open} toggleDrawer={toggleDrawer} />
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Toolbar />
        <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
          <Suspense fallback="Loading...">
            <Switch>
              {
              routes
                .filter(route => route.meta.nav)
                .map((route, rIdx) => (
                  <Route key={rIdx} path={route.path} component={route.component} exact={route.exact} />
                ))
              }
            </Switch>
          </Suspense>
        </Container>
      </Box>
    </Box>
  );
}

export default DashboardContent;