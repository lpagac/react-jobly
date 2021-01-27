import NavBar from './NavBar';
import JobList from './JobList';
import HomePage from './HomePage';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import CompanyList from './CompanyList';
import ProfileForm from './ProfileForm';
import CompanyDetails from './CompanyDetails';
import {Route, BrowserRouter, Switch, Redirect} from 'react-router-dom';

/** Renders all Routes for site
 * 
 * props:
 * - currentUser
 * - applyToJob: function 
 * - updateCurrentInfo: function
 * - createNewUser: function
 * - loginUser: function
 * 
 * state: None
 */

// CODE REVIEW move NavBar & BrowserRouter to App
function Routes({currentUser, applyToJob, updateCurrentInfo, createNewUser, loginUser}) {
  return(
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/companies">
          <CompanyList />
        </Route>

        <Route exact path="/companies/:name">
          <CompanyDetails applyToJob={applyToJob} />
        </Route>

        <Route exact path="/jobs">
          <JobList applyToJob={applyToJob} />
        </Route>

        <Route exact path="/signup">
          <SignUpForm handleSubmit={createNewUser} />
        </Route>

        <Route exact path="/login">
          <LoginForm handleSubmit={loginUser} />
        </Route>

        <Route exact path="/profile">
          <ProfileForm handleSubmit={updateCurrentInfo} user={currentUser} />
        </Route>

        <Route>
          <Redirect to="/"/>
        </Route>
      </Switch>
  );
}

export default Routes;
