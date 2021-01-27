import { Link } from 'react-router-dom';
/** HomePage Component
 * Props: currentUser (holds logged in user)
 * State:
 * App -> router / -> HomePage
 **/
function HomePage({ currentUser }) {
  console.log("HomePage rendered");
  /* Renders view for current user */
  function renderLoggedInView() {
    return (<div>Welcome Back, {currentUser.firstName}!</div>);
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
