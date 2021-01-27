import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';
import Routes from './Routes';
import './App.css';
import { useState } from 'react';

/* App component
 */
function App() {
  const [currentUser, setCurrentUser] = useState({});

  function login(user){
    setCurrentUser(user);
  }

  function applyToJob(jobId) {
    console.log("Applied to jobid:", jobId);
  }
  function updateCurrentInfo(){
    console.log("updateCurrentInfo");
  }
  function createNewUser(){
    console.log("createNewUser");
  }
  function loginUser(){
    console.log("loginUser");
  }
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        {/* currentUser, applyToJob, updateCurrentInfo, createNewUser, loginUser */}
        <Routes currentUser={currentUser} updateCurrentInfo={updateCurrentInfo} createNewUser={createNewUser} loginUser={loginUser} applyToJob={applyToJob} />
      </BrowserRouter>
    </div>
  );
}

export default App;
