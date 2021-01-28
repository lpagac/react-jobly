import { Link } from 'react-router-dom';
import UserContext from "./userContext";
import { useContext } from "react";
import RoboJobsImage from './roboJobs.jpg';

/** HomePage Component
 * Props: currentUser (holds logged in user)
 * State:
 * App -> router / -> HomePage
 **/
function HomePage() {
  console.log("HomePage rendered");
  const currentUser = useContext(UserContext);

  /* Renders view for current user */
  function renderLoggedInView() {
    return (
    <div>
      <p> Welcome Back, {currentUser.firstName}! </p>
      <img alt="Robot Jobs" src={RoboJobsImage} width="100%"/>
    </div>);
  }
  /* Renders view when there is no current user */
  function renderLoggedOutView() {
    return (
      <div>
        <Link to="/login"> Login </Link>
        <Link to="/signup"> Signup! </Link>
      </div>);
  }
  return (
    <div>
      <h1>Jobly!
        <small><br />All the jobs in one convenient place!</small>
      </h1>
      { (currentUser) ? renderLoggedInView() : renderLoggedOutView()}
    </div>
  );
}

export default HomePage;
