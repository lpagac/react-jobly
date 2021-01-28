import { NavLink } from 'react-router-dom';
import "./NavBar.css";
import UserContext from "./userContext";
import { useContext } from "react";

/** NavBar Component
 * Props: logout (function, logs user out)
 * State:
 * App -> NavBar (renders on all pages)
 **/
function NavBar({ logOut }) {
  console.log("NavBar rendered");
  const currentUser = useContext(UserContext);

  // /* Renders view for current user */
  // function renderLoggedInView(){
  //   return (
  //     <div className="NavBar-right">
  //       <NavLink exact to="/companies"> Companies </NavLink>
  //       <NavLink exact to="/jobs"> Jobs </NavLink>
  //       <NavLink exact to="/profile"> Profile </NavLink>
  //       <button onClick={logOut}> Logout </button>
  //     </div>);
  // }

  // /* Renders view when there is no current user */
  // function renderLoggedOutView() {
  //   return (
  //     <div className="NavBar-right">
  //       <NavLink exact to="/login"> Login </NavLink>
  //       <NavLink exact to="/signup"> Signup </NavLink>
  //     </div>);
  // }

  function renderStandardView() {
    return (
      <ul className="NavBar-right">
        <li className="NavBar-item">
          <NavLink to="/companies"> Companies </NavLink>
        </li>
        <li className="NavBar-item">
          <NavLink exact to="/jobs"> Jobs </NavLink>
        </li>
        <li className="NavBar-item">
          <NavLink exact to="/profile"> Profile </NavLink>
        </li>
        <li className="NavBar-item">
          <NavLink exact to="/login"> Login </NavLink>
        </li>
        <li className="NavBar-item">
          <NavLink exact to="/signup"> Signup </NavLink>
        </li>
      </ul>);
  }

  return (
    <nav className="NavBar">
      <NavLink exact to="/" className="NavBar-left">Jobly</NavLink>

      {renderStandardView()}
    </nav>
  );
}

export default NavBar;
