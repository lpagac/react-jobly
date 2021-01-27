import { NavLink} from 'react-router-dom';

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
        <NavLink exact to="/companies"> Companies </NavLink>
        <NavLink exact to="/jobs"> Jobs </NavLink>
        <NavLink exact to="/profile"> Profile </NavLink>
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

  function renderStandardView() {
    return (
      <div className="NavBar-right">
        <NavLink to="/companies"> Companies </NavLink>
        <NavLink exact to="/jobs"> Jobs </NavLink>
        <NavLink exact to="/profile"> Profile </NavLink>
        <NavLink exact to="/login"> Login </NavLink>
        <NavLink exact to="/signup"> Signup </NavLink>
      </div>);
  }

  return(
    <nav className="NavBar">
      <NavLink exact to="/">Jobly</NavLink>

      {renderStandardView()}
    </nav>
  );
}

export default NavBar;
