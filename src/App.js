import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';
import Routes from './Routes';
import './App.css';
import { useState } from 'react';
import UserContext from "./userContext";
import JoblyApi from './APIHelper';
import jwt from "json-web-token";

/* App component
 */
function App() {
  console.log("App rendered");
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState('');
  // change currUser whenever the token changes via effect with token as dependency

  useEffect(function makeApiRequestForUser() {
    async function fetchUser() {
      const username = jwt.decode(token).username;
      const userInfo = await JoblyApi.getCurrentUser(username)
      setCurrentUser(userInfo);
    }
  }, [token]);
  /* Login function
   * Passed down to Routes
   */
  function loginUser(formData){
    async function makeApiRequestToLogin() {
      const userToken = await JoblyApi.login(formData);
      setToken(userToken);
    };
    makeApiRequestToLogin();
  };

  /* applyToJob function
   * Passed down to JobCard
   */
  function applyToJob(jobId) {
    console.log("Applied to jobid:", jobId);
  }

  /* updateProfileInfo function
   * Passed down to Routes
   */
  function updateProfileInfo(formData){
    async function updateUser() {
      const username = jwt.decode(token).username;
      const newUser = JoblyApi.updateUser(username, formData);
      setCurrentUser(currUser => {
        return {
          ...currUser,
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          email: newUser.email,
          isAdmin: newUser.isAdmin,
        }
    });
    updateUser();
  }

  /* createNewUser function
   * used by /signup
   * Passed down to SignUpForm
   */
  function createNewUser(formData){
    async function makeApiRequestToLogin() {
      const userToken = await JoblyApi.signup(formData);
      setToken(userToken);
    };
    makeApiRequestToLogin(); 
  }

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={currentUser}>
          <NavBar />
          <Routes
            updateProfileInfo={updateProfileInfo}
            createNewUser={createNewUser}
            loginUser={loginUser}
            applyToJob={applyToJob} />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
