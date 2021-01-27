import Routes from './Routes';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
