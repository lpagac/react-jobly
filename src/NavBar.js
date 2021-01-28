
import UserContext from "./userContext";
import { useContext } from "react";
import {renderLoggedInView, renderLoggedOutView} from './NavBarTW.jsx';

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
  //     <ul className="NavBar-right">
  //       <li className="NavBar-item">
  //         <NavLink exact to="/companies"> Companies </NavLink>
  //       </li>
  //       <li className="NavBar-item">
  //         <NavLink exact to="/jobs"> Jobs </NavLink>
  //       </li>
  //       <li className="NavBar-item">
  //         <NavLink exact to="/profile"> Profile </NavLink>
  //       </li>
  //       <li className="NavBar-item">
  //         <button onClick={logOut}> Logout {currentUser.firstName} </button>
  //       </li>
  //     </ul>);
  // }

  // /* Renders view when there is no current user */
  // function renderLoggedOutView() {
  //   return (
  //     <div className="NavBar-right">
  //       <NavLink exact to="/login"> Login </NavLink>
  //       <NavLink exact to="/signup"> Signup </NavLink>
  //     </div>);
  // }

  return (
    <nav className="NavBar">

      { currentUser ? renderLoggedInView(currentUser,logOut) : renderLoggedOutView()}
    </nav>
  );
}

export default NavBar;
