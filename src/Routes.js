import JobList from './JobList';
import HomePage from './HomePage';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import CompanyList from './CompanyList';
import ProfileForm from './ProfileForm';
import PrivateRoute from "./PrivateRoute";
import CompanyDetails from './CompanyDetails';
import { Route, Switch, Redirect } from 'react-router-dom';

/** Renders all Routes for site
 *
 * props:
 * - updateProfile: function
 * - signup: function
 * - login: function
 *
 * state: None
 */

function Routes({ signup, login, updateProfile }) {
  console.log("Routes rendered");
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>

      <Route exact path="/signup">
        <SignUpForm handleSignUp={signup} />
      </Route>

      <Route exact path="/login">
        <LoginForm handleLogin={login} />
      </Route>

      <PrivateRoute exact path="/companies">
        <CompanyList />
      </PrivateRoute>

      <PrivateRoute exact path="/companies/:handle">
        <CompanyDetails />
      </PrivateRoute>

      <PrivateRoute exact path="/jobs">
        <JobList />
      </PrivateRoute>

      <PrivateRoute exact path="/profile">
        <ProfileForm handleUpdate={updateProfile} />
      </PrivateRoute>

      <Route>
        <Redirect to="/" />
      </Route>
    </Switch>
  );
}

export default Routes;
