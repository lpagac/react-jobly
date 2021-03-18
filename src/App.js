import { BrowserRouter } from 'react-router-dom';
import NavBar from './routes-nav/NavBar';
import Routes from './routes-nav/Routes';
import { useState, useEffect } from 'react';
import UserContext from "./auth/userContext";
import JoblyApi from './api/APIHelper';
import jwt from "jsonwebtoken";
import useLocalStorage from "./hooks/useLocalStorage";

export const TOKEN_STORAGE_ID = "jobly-token";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [appliedIds, setAppliedIds] = useState(new Set([]));
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);
  // change currUser whenever the token changes via effect with token as dependency

  useEffect(function makeApiRequestForUser() {
    async function fetchUser() {
      if (token) {
        try {
          const { username } = jwt.decode(token);
          // put token on API class so it can make the request
          JoblyApi.token = token;
          const currentUser = await JoblyApi.getCurrentUser(username);
          setCurrentUser(currentUser);
          setAppliedIds(new Set(currentUser.applications));
        } catch (e) {
          console.error("App fetchUser: problem loading", e);
          setCurrentUser(null);
        }
      }
    }
    fetchUser();
  }, [token]);

  /* Login function
   * Passed down to Routes
   */
  async function login(loginData) {
    try {
      const userToken = await JoblyApi.login(loginData);
      setToken(userToken);
      return { success: true };
    } catch (errors) {
      return { success: false, errors };
    }
  };

  /** Logout function
   * Passed down to NavBar
   */
  function logoutUser() {
    setToken(null);
    setCurrentUser(null);
  }

  /* signup function
   * used by /signup
   * Passed down to SignUpForm
   *
   * sign up user and then store their token (log them in)
   */
  async function signup(signupData) {
    try {
      const userToken = await JoblyApi.signup(signupData);
      setToken(userToken);
      return { success: true }
    } catch (errors) {
      return { success: false, errors }
    }
  }

  /** Update users profile information
   * used by /profile
   * passed down to ProfileForm
   */
  async function updateProfile(updateInfo) {
    try {
      const res = await JoblyApi.updateUser(currentUser.username, updateInfo);
      setCurrentUser(res);
      return {success: true}
    } catch (errors) {
      return {success: false, errors}
    }
  }

  /** Checks if a job has been applied for. */
  function hasAppliedToJob(id) {
    return appliedIds.has(id);
  }

  /* applyToJob function
   * Passed down to JobCard
   * make API call and update set of application IDs
   */
  function applyToJob(jobId) {
    if (hasAppliedToJob(jobId)) return;
    JoblyApi.applyToJob(currentUser.username, jobId);
    setAppliedIds(new Set([...appliedIds, jobId]));
  }


  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{ currentUser, setCurrentUser, hasAppliedToJob, applyToJob }}>
          <NavBar logout={logoutUser} />
          <Routes
            signup={signup}
            login={login} 
            updateProfile={updateProfile}
          />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
