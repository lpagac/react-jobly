import { useContext} from "react";
import UserContext from "./userContext";
import { Redirect, Route } from "react-router-dom";

/** PrivateRoute protector for users not logged in
 * 
 * props: using default prop of children to render all child components
 * 
 * state: None
 */

function PrivateRoute({exact, path, children}) {
  console.log("PrivateRoute rendered");
  const {currentUser} = useContext(UserContext);

  if (!currentUser) 
  return <Redirect to="/login" />

  return (
    <Route exact={exact} path={path}>
      {children}
    </Route>
  );
}

export default PrivateRoute;