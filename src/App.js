import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';
import Routes from './Routes';
import './App.css';
import { useState } from 'react';

/* App component
 */
function App() {
  console.log("App rendered");
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState('');
  // change currUser whenever the token changes via effect with token as dependency

  /* Login function
   * Passed down to Routes
   */
  function login(user){
    setCurrentUser(user);
    console.log("token:",token);
  }
  console.log("login function",login);

  /* applyToJob function
   * Passed down to JobCard
   */
  function applyToJob(jobId) {
    console.log("Applied to jobid:", jobId);
  }

  /* updateProfileInfo function
   * Passed down to Routes
   */
  function updateProfileInfo(){
    console.log("updateProfileInfo");
  }

  /* createNewUser function
   * used by /signup
   * Passed down to SignUpForm
   */
  function createNewUser(){
    console.log("createNewUser");
  }

  /* loginUser function
   * used by /login
   * Passed down to LoginForm
   */
  function loginUser(){
    console.log("loginUser");
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes
          currentUser={currentUser}
          updateProfileInfo={updateProfileInfo}
          createNewUser={createNewUser}
          loginUser={loginUser}
          applyToJob={applyToJob} />
      </BrowserRouter>
    </div>
  );
}

export default App;
