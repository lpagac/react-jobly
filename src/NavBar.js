import {Link, NavLink} from 'react-router-dom';

/** NavBar Component
 * Props: logout (function, logs user out)
 * State:
 * App -> NavBar (renders on all pages)
 **/
function NavBar({currentUser, logOut}) {

  /* Renders view for current user */
  function renderLoggedInView(){
    return (
      <div className="NavBar-right">
        <NavLink exact path="/companies"> Companies </NavLink>
        <NavLink exact path="/jobs"> Jobs </NavLink>
        <NavLink exact path="/profile"> Profile </NavLink>
        <button onClick={logOut}> Logout </button>
      </div>);
  }

  /* Renders view when there is no current user */
  function renderLoggedOutView() {
    return (
      <div className="NavBar-right">
        <NavLink exact to="/login"> Login </NavLink>
        <NavLink exact to="/signup"> Signup </NavLink>
      </div>);
  }

  return(
    <nav>
      <NavLink exact path="/">Jobly</NavLink>

      { (currentUser) ? renderLoggedInView() : renderLoggedOutView()}
    </nav>
  );
}

export default NavBar;
