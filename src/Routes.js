import NavBar from './NavBar';
import JobList from './JobList';
import HomePage from './HomePage';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import CompanyList from './CompanyList';
import ProfileForm from './ProfileForm';
import CompanyDetails from './CompanyDetails';
import {Route, BrowserRouter, Switch, Redirect} from 'react-router-dom';

function Routes({currentUser, applyToJob, updateCurrentInfo, createNewUser, loginUser}) {
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
      </BrowserRouter>
  );
}

export default Routes;
