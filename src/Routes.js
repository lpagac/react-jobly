import JobList from './JobList';
import HomePage from './HomePage';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import CompanyList from './CompanyList';
import ProfileForm from './ProfileForm';
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

      <Route exact path="/companies">
        <CompanyList />
      </Route>

      <Route exact path="/companies/:handle">
        <CompanyDetails applyToJob={applyToJob} />
      </Route>

      <Route exact path="/jobs">
        <JobList applyToJob={applyToJob} />
      </Route>

      <Route exact path="/signup">
        <SignUpForm handleSignUp={createNewUser} />
      </Route>

      <Route exact path="/login">
        <LoginForm handleLogin={loginUser} />
      </Route>

      <Route exact path="/profile">
        <ProfileForm handleSubmit={updateCurrentInfo} />
      </Route>

      <Route>
        <Redirect to="/" />
      </Route>
    </Switch>
  );
}

export default Routes;
