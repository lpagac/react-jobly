import { useContext} from "react";
import UserContext from "./userContext";
import { Redirect } from "react-router-dom";

/** PrivateRoute protector for users not logged in
 * 
 * props: using default prop of children to render all child components
 * 
 * state: None
 */

function PrivateRoute(props) {
  console.log("PrivateRoute rendered");
  const currentUser = useContext(UserContext);

  if (currentUser) return props.children;
  return <Redirect to="/" />
}

export default PrivateRoute;