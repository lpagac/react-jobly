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
      <h2> Welcome Back, {currentUser.firstName}! </h2>
      <div>
        <img className="w-5/5" alt="Robot Jobs" src={RoboJobsImage} />
      </div>
    </div>);
  }
  /* Renders view when there is no current user */
  function renderLoggedOutView() {
    return (
      <div className="flex items-center justify-center mt-10">
        <Link className="mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold text-2xl py-4 px-6 rounded-full" to="/login"> Login </Link>
        <Link className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold text-2xl py-4 px-6 rounded-full" to="/signup"> Signup! </Link>
      </div>);
  }
  return (
    <div>
      <header className="bg-white shadow flex items-center justify-center">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold leading-tight text-gray-900 text-center">Jobly!
            <small><br />All the jobs in one convenient place!</small>
          </h1>
        </div>
      </header>
      <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          { (currentUser) ? renderLoggedInView() : renderLoggedOutView()}
          </div>
      </main>

    </div>
  );
}

export default HomePage;
