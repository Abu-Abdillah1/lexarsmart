import React, { useState } from 'react';
import Logo from "./logo.png"
import classes from "./index.module.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';

const LoginForm = ({ onSignupClick, loggedIn, setLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    // Handle login logic (e.g., send credentials to a server)
    console.log('Logging in with:', username, password);
    console.log('Remember Me:', rememberMe);
  };

  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        <img src={Logo} alt="Site logo" />
      </div>
      <form>
        <div>
          <input
            type="email"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Email'
            className={classes.input}
          />
        </div>
        <div>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            className={classes.input}
          />
        </div>
        <div className={classes.rememberMe}>
          <input
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
          <label htmlFor="rememberMe">Remember Me</label>
        </div>
        <div>
          <button type="button" onClick={handleLogin} className={classes.button}>
            Login
          </button>
        </div>
        
        <div className={classes.formButtom}>
          <div>
            <a href="#forgot">Forgot Password?</a>
          </div>
          <p>
            Don't have an account?{' '}
            <span onClick={onSignupClick} style={{ cursor: 'pointer', color: '#007bff' }}>
              Sign Up
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

const SignupForm = ({ onLoginClick, loggedIn, setLoggedIn }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [country, setCountry] = useState('');
  const navigate= useNavigate();


  const handleSignup = () => {
    // Handle signup logic (e.g., send new credentials to a server)
    console.log('Signing up with:', email, password);
    axios.post('https://lexarsmart.onrender.com/api/v1/auth/register', {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      country: country,
    })
      .then(response => {
        // Handle successful response (you may want to redirect or show a success message)
        console.log('Signup successful:', response.data);
        if (response.data.success) {
          setFirstName('')
          setLastname('')
          setEmail('')
          setPassword('')
          setCountry('')
          setLoggedIn(true);
          navigate("/dashboard")
        }
        // <Navigate to="/dashboard" replace={true} />
      })
      .catch(error => {
        // Handle error (you may want to show an error message to the user)
        console.error('Signup error:', error);
      });
  };

  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        <img src={Logo} alt="Site logo" />
      </div>
      <form>
        <div>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder='First Name'
            className={classes.input}
          />
        </div>
        <div>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastname(e.target.value)}
            placeholder='Last Name'
            className={classes.input}
          />
        </div>
        <div>
          <input
            type="text"
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder='Country'
            className={classes.input}
          />
        </div>
        <div>
          <input
            type="email"
            id="newEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
            className={classes.input}
          />
        </div>
        <div>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            className={classes.input}
          />
        </div>
        <div>
          <button type="button" onClick={handleSignup} className={classes.button}>
            Sign Up
          </button>
        </div>
        <div className={classes.formButtom}>
          <p>
            Already have an account?{' '}
            <span onClick={onLoginClick} style={{ cursor: 'pointer', color: '#007bff' }}>
              Login
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

const LoginContainer = ({setLoggedIn, loggedIn}) => {
  const [showLogin, setShowLogin] = useState(true);
  setLoggedIn(false)
  const handleSignupClick = () => {
    setShowLogin(false);
  };

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  return (
    <div className={classes.wrap}>
      {showLogin ? (
        <LoginForm loggedIn={loggedIn} setLoggedIn={setLoggedIn} onSignupClick={handleSignupClick} />
      ) : (
          <SignupForm loggedIn={loggedIn} setLoggedIn={setLoggedIn} onLoginClick={handleLoginClick} />
      )}
    </div>
  );
};

export default LoginContainer;
