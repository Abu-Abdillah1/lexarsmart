// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './components/login';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  loggedIn ? console.log("User Logged In") : console.log("No user logged in");
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LoginPage loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
        <Route path="/dashboard" element={<Dashboard loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
      </Routes>
    </div>
  );
}

export default App;
