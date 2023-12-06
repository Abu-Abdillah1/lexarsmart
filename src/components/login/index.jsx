import React, { useState, useEffect } from 'react';
import Logo from "./logo.png"
import classes from "./index.module.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { PropagateLoader } from "react-spinners";
// import { Navigate } from 'react-router-dom';

const LoginForm = ({ onSignupClick, loggedIn, setLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // console.log(email)
    // console.log(password)
    // Update local storage values when rememberMe or other state values change
    if (localStorage.getItem('rememberMe')==='true') {
      // console.log('yes')
      setEmail(localStorage.getItem('rememberedEmail'))
      setPassword(localStorage.getItem('rememberedPassword'))
      setRememberMe(localStorage.getItem('rememberMe'))
    }
    else {
      localStorage.removeItem('rememberedEmail');
      localStorage.removeItem('rememberedPassword');
      localStorage.removeItem('rememberMe');
    }
  }, []);

  const handleLogin = () => {
    // console.log('Logging in with:', email, password);
    // console.log('Remember Me:', rememberMe);
    localStorage.setItem('rememberMe', rememberMe);
    setLoading(!loading);

    axios
      .post('https://lexarsmart.onrender.com/api/v1/auth/login', {
        email: email,
        password: password,
      })
      .then(response => {
        if (response.data.success) {
          console.log('Login successful:', response.data);
          setLoggedIn(true);
          localStorage.setItem('rememberedEmail', email)
          localStorage.setItem('rememberedPassword', password)
          localStorage.setItem('rememberMe', rememberMe)
          navigate('/dashboard');
          setLoading(!loading);
        }
        else {
          setLoading(false)
          // console.log(loading)
        }
      })
      .catch(error => {
        setLoading(false);
        // console.log(loading)
        console.error('Login error:', error);
      });
  };

  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        <img src={Logo} alt="Site logo" />
      </div>
      <form className={classes.formWrap}>
        <div>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className={classes.input}
          />
        </div>
        <div>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className={classes.input}
          />
        </div>
        <div className={classes.rememberMe}>
          <input
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={() => setRememberMe(prevState => !prevState)}
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
      {loading && <div className={classes.loader}>
        <PropagateLoader color="#636363" />
      </div>}
    </div>
  );
};

const SignupForm = ({ onLoginClick, setLoggedIn }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [country, setCountry] = useState('');
  const [loading, setLoading]= useState(false)
  const navigate= useNavigate();


  const handleSignup = () => {
    // Handle signup logic (e.g., send new credentials to a server)
    console.log('Signing up with:', email, password);
    setLoading(!loading)
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
          setLoading(!loading)
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
        setLoading(!loading)
      });
  };

  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        <img src={Logo} alt="Site logo" />
      </div>
      <form className={classes.formWrap}>
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
      {loading && <div className={classes.loader}>
        <PropagateLoader color="#636363" />
      </div>}
    </div>
  );
};

const LoginContainer = ({setLoggedIn, loggedIn}) => {
  const [showLogin, setShowLogin] = useState(true);
  // setLoggedIn(false)
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
