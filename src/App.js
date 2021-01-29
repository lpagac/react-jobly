import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';
import Routes from './Routes';
import { useState, useEffect } from 'react';
import UserContext from "./userContext";
import JoblyApi from './APIHelper';
import jwt from "jsonwebtoken";

/* App component
 */
function App() {
  console.log("App rendered");
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  // change currUser whenever the token changes via effect with token as dependency

  useEffect(function makeApiRequestForUser() {
    async function fetchUser() {
      const { username } = jwt.decode(token);
      JoblyApi.token = token;
      try {
        const userInfo = await JoblyApi.getCurrentUser(username);
        setCurrentUser(userInfo);
      } catch (e) {
        console.error("unable to fetch user", e);
        setCurrentUser(null);
      }
    }
    if (token) {
      fetchUser();
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }, [token]);

  /* Login function
   * Passed down to Routes
   */
  async function loginUser(formData) {
    console.log("Login!");
    try {
      const userToken = await JoblyApi.login(formData);
      setToken(userToken);
      return { success: true };
    } catch (e) {
      return { success: false, error: e };
    }
  };

  /** Logout function
   * Passed down to NavBar
   */
  function logoutUser() {
    console.log("Log Out!");
    setToken('');
    setCurrentUser(null);
  }

  /* applyToJob function
   * Passed down to JobCard
   */
  function applyToJob(jobId) {
    console.log("Applied to jobid:", jobId);
  }

  /* updateProfileInfo function
   * makes API request to update DB
   * sets current user to the updated user
   * Passed down to Routes
   * returns success object
    * if success is false - returns any errors
   */
  async function updateProfileInfo(formData) {
    console.log("Update user time")
    try {
      const username = jwt.decode(token).username;
      const res = await JoblyApi.updateUser(username, formData);
      setCurrentUser(currUser => {
        return {
          ...currUser,
          firstName: res.firstName,
          lastName: res.lastName,
          email: res.email,
          isAdmin: res.isAdmin,
        }
      });
      return { success: true };
    }
    catch (e) {
      return { success: false, error: e };
    }
  }


  /* signUpUser function
   * used by /signup
   * Passed down to SignUpForm
   *
   * sign up user and then store their token (log them in)
   */
  async function signUpUser(formData) {
    try {
      const userToken = await JoblyApi.signup(formData);
      setToken(userToken);
      return { success: true }
    } catch (e) {
      return { success: false, error: e }
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={currentUser}>
          <NavBar logOut={logoutUser} />
          <Routes
            updateProfileInfo={updateProfileInfo}
            signUpUser={signUpUser}
            loginUser={loginUser}
            applyToJob={applyToJob} />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
