import {Route, BrowserRouter, Switch} from 'react-router-dom';
import HomePage from './HomePage';
import NavBar from './NavBar';

function Routes({currentUser, applyToJob, updateCurrentInfo}) {
  return(
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/companies">
            <CompanyList />
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default Routes;
