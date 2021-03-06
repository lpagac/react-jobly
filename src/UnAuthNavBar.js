// <!-- This example requires Tailwind CSS v2.0+ -->
import { NavLink } from "react-router-dom";

/** UnAuthNavBar - UnAuthenticated Navigation Bar component
 * Props: styles (list of tailwind classes)
 * State: none
 * App -> NavBar -> {UnAuthNavBar, AuthNavBar}
 *  */
function UnAuthNavBar({styles}){

  return (
    <nav className="w-full bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
                <NavLink exact to="/" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" > Jobly </NavLink>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center justify-between h-16 md:ml-6">
            {/* Nav-right */}
              <NavLink exact to="/login" className={styles.navItem} > Login </NavLink>
              <NavLink exact to="/signup" className={styles.navItem} > Signup </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default UnAuthNavBar;
