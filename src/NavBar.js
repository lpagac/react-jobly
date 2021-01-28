
import UserContext from "./userContext";
import { useContext } from "react";
import AuthNavBar from "./AuthNavBar";
import UnAuthNavBar from "./UnAuthNavBar";


/** NavBar Component
 * Props: logout (function, logs user out)
 * State:
 * App -> NavBar -> {UnAuthNavBar, AuthNavBar}
 **/
function NavBar({ logOut }) {
  console.log("NavBar rendered");
  const currentUser = useContext(UserContext);

  const styles = {
    navItem:'bg-gray-800 hover:bg-gray-300 hover:text-gray-800 text-white px-3 py-2 rounded-md text-sm font-medium'
  };

  return (
    <nav className="NavBar">
      { currentUser
      ? <AuthNavBar styles={styles} logOut={logOut} />
      : <UnAuthNavBar styles={styles} /> }
    </nav>
  );
}

export default NavBar;
