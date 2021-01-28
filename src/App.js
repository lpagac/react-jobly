import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';
import Routes from './Routes';
import './App.css';
import { useState, useEffect } from 'react';
import UserContext from "./userContext";
import JoblyApi from './APIHelper';
import jwt from "jsonwebtoken";

/* App component
 */
function App() {
  console.log("App rendered");
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState('');
  // change currUser whenever the token changes via effect with token as dependency

  useEffect(function makeApiRequestForUser() {
    async function fetchUser() {
      const {username} = jwt.decode(token);
      console.log("username is", username);
      try {
        const userInfo = await JoblyApi.getCurrentUser(username);
        setCurrentUser(userInfo);
      } catch (e) {
        console.error("unable to fetch user", e);
      }
    }
    if(token) fetchUser();
  }, [token]);

  /* Login function
   * Passed down to Routes
   */
  async function loginUser(formData){
    console.log("Login!");
    const userToken = await JoblyApi.login(formData);
    setToken(userToken);
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
   * Passed down to Routes
   */
  // function updateProfileInfo(formData){
  //   async function updateUser() {
  //     const username = jwt.decode(token).username;
  //     const newUser = JoblyApi.updateUser(username, formData);
  //     setCurrentUser(currUser => {
  //       return {
  //         ...currUser,
  //         firstName: newUser.firstName,
  //         lastName: newUser.lastName,
  //         email: newUser.email,
  //         isAdmin: newUser.isAdmin,
  //       }
  //   });
  //   updateUser();
  // }

  /* createNewUser function
   * used by /signup
   * Passed down to SignUpForm
   */
  async function createNewUser(formData){
    try {
      const userToken = await JoblyApi.signup(formData);
      setToken(userToken);
    } catch (e) {
      console.error('unable to create new user', e);
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={currentUser}>
          <NavBar logOut={logoutUser} />
          <Routes
            // updateProfileInfo={updateProfileInfo}
            createNewUser={createNewUser}
            loginUser={loginUser}
            applyToJob={applyToJob} />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
