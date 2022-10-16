import { Route, Switch } from "react-router-dom";
import DashboardPage from "../pages/Dashboard";
import RegisterPage from "../pages/Register";

const Routes = () => {

  return (
    <Switch>
      <Route component={RegisterPage} exact path='/'/>
      <Route component={DashboardPage} exact path='/dashboard'/>
    </Switch>
  )
};

export default Routes;