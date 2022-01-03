import { Switch, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

import Login from './pages/login'
import DashboardLayout from './layouts/dashboard-layout'

function App() {
  const user = useSelector(state => state.user)

  console.log(user)

  return (
    <div className="App">
      <Switch>
        <Route path="/login">
          {
            !user.isLoggedIn ?
            <Login />:
            <Redirect to="/" />
          }
        </Route>
        <Route exact path="/">
          {
            user.isLoggedIn ?
            <DashboardLayout />:
            <Redirect to="/login" />
          }
        </Route>
      </Switch>
    </div>
  );
}

export default App;
