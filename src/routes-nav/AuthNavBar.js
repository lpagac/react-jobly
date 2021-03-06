import { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../auth/userContext";

/** AuthNavBar - Authenticated Navigation Bar component
 * Props:
 * - styles (object with list of tailwind classes),
 * - logout (function to log user out)
 * State: none
 * App -> NavBar -> {UnAuthNavBar, AuthNavBar}
 */
function AuthNavBar({ styles, logout }) {
  const { currentUser } = useContext(UserContext);

  return (
    <nav className="w-full bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <NavLink exact to="/" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" > Jobly </NavLink>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}

              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {/* Nav-right */}
              <NavLink exact to="/companies" className={styles.navItem} > Companies </NavLink>
              <NavLink exact to="/jobs" className={styles.navItem} > Jobs </NavLink>
              <NavLink exact to="/profile" className={styles.navItem} > Profile </NavLink>
              <button onClick={logout} className={styles.navItem} > Logout {currentUser.firstName} </button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            {/* <!-- Mobile menu button --> */}
            <button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span className="sr-only">Open main menu</span>
              {/* <!--
                Heroicon name: menu

                Menu open: "hidden", Menu closed: "block"
              --> */}
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* <!--
                Heroicon name: x

                Menu open: "block", Menu closed: "hidden"
              --> */}
              <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* <!--
        Mobile menu, toggle classes based on menu state.

        Open: "block", closed: "hidden"
      --> */}
      <div className="hidden md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}

          <NavLink exact to="/companies" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" > Companies </NavLink>
          <NavLink exact to="/jobs" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"> Jobs </NavLink>
          <NavLink exact to="/profile" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"> Profile </NavLink>
          <button onClick={logout} > Logout {currentUser.firstName} </button>
        </div>
      </div>
    </nav>
  );
}
export default AuthNavBar;
