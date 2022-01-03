import { Switch, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

import Login from './pages/login'
import DashboardLayout from './layouts/dashboard-layout'

function App() {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn)

  return (
    <div className="App">
      <Switch>
        <Route path="/login">
          {
            !isLoggedIn ?
            <Login />:
            <Redirect to="/" />
          }
        </Route>
        <Route path="/">
          {
            isLoggedIn ?
            <DashboardLayout />:
            <Redirect to="/login" />
          }
        </Route>
      </Switch>
    </div>
  );
}

export default App;
