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
 * - applyToJob: function
 * - updateCurrentInfo: function
 * - createNewUser: function
 * - loginUser: function
 *
 * state: None
 */

function Routes({ applyToJob, updateCurrentInfo, createNewUser, loginUser }) {
  console.log("Routes rendered");
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>

      <Route exact path="/signup">
        <SignUpForm handleSignUp={createNewUser} />
      </Route>

      <Route exact path="/login">
        <LoginForm handleLogin={loginUser} />
      </Route>

      <PrivateRoute exact path="/companies">
        <CompanyList />
      </PrivateRoute>

      <PrivateRoute exact path="/companies/:handle">
        <CompanyDetails applyToJob={applyToJob} />
      </PrivateRoute>

      <PrivateRoute exact path="/jobs">
        <JobList applyToJob={applyToJob} />
      </PrivateRoute>

      <PrivateRoute exact path="/profile">
        <ProfileForm handleSubmit={updateCurrentInfo} />
      </PrivateRoute>

      <Route>
        <Redirect to="/" />
      </Route>
    </Switch>
  );
}

export default Routes;
