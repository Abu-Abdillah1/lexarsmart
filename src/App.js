import { useState, useEffect, useRef } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './components/login';
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import Dashboard from './components/dashboard';
import axios from 'axios';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [userObject, setUserObject] = useState(null);

  // Check for login status in localStorage on initial render
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUserObject = localStorage.getItem('userObject');

    if (storedToken && storedUserObject) {
      setToken(storedToken);
      setUserObject(JSON.parse(storedUserObject));
      setLoggedIn(true);
    }
  }, []);

  // Track the last activity time
  const lastActivityTime = useRef(Date.now());

  // Use the history object to manage navigation
  const navigate = useNavigate();

  // Check if the user is logged in and has not exceeded the inactivity time limit
  const isUserLoggedIn = () => {
    return loggedIn && Date.now() - lastActivityTime.current < 30 * 60 * 1000;
  };

  // Update the last activity time when there's user interaction
  const handleUserActivity = () => {
    lastActivityTime.current = Date.now();
  };

  // Set up a timer to check inactivity and redirect if needed
  useEffect(() => {
    const checkInactivity = () => {
      if (!isUserLoggedIn()) {
        // Redirect to the login page if not logged in or inactive
        navigate('/');
      }
    };

    if (token) {
      // Save login status and token to localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('userObject', JSON.stringify(userObject));

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      axios
        .get('https://lexarsmart.onrender.com/api/v1/users/profile', config)
        .then((response) => {
          setUserObject(response.data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }

    const inactivityTimer = setInterval(checkInactivity, 60 * 10000); // Check every minute

    // Clear the timer when the component is unmounted
    return () => clearInterval(inactivityTimer);
  }, [navigate, token, userObject, loggedIn]);

  return (
    <div className="App" onMouseMove={handleUserActivity} onClick={handleUserActivity}>
      {/* Routes */}
      <Routes>
        <Route
          path="/"
          exact
          element={<LoginPage loggedIn={loggedIn} token={token} setToken={setToken} setLoggedIn={setLoggedIn} />}
        />
        <Route
          path="/dashboard/*"
          element={
            isUserLoggedIn() ? (
              <Dashboard userObject={userObject} token={token} />
            ) : (
              <Navigate to="/" replace={true} />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
