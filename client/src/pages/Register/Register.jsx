import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BACKEND_BASE_URL } from '../../constants';
import Alert from '@mui/material/Alert';
import './Register.scss';

const Register = () => {
  const [alert, setAlert] = useState(false);
  const [errMsg, setErrMsg] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();
  // handler submit forms
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username.current.value.match('^[A-Za-z0-9]{3,16}$') == null) {
      setAlert(true);
      setErrMsg('User name should be 3-16 characters and shouldn’t include any specials characters');
      setTimeout(() => setAlert(false), 3000);
    } else if (email.current.value.match('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$') == null) {
      setAlert(true);
      setErrMsg('It should be valid email');
      setTimeout(() => setAlert(false), 3000);
    } else if (password.current.value !== passwordAgain.current.value) {
      setAlert(true);
      setErrMsg('Password  don`t match!');
      setTimeout(() => setAlert(false), 3000);
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post(`${BACKEND_BASE_URL}/auth/register`, user);
        setAlert(true);
        setSuccessMsg('Account has been created');
        setErrMsg(null);
        setTimeout(() => {
          navigate('/login');
        }, 3000);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="login">
      <h1 className="loginTitle">Create new Account</h1>
      <div className="loginWrapper">
        <div className="left">
          <div className="leftTitle">
            Movie World <br /> <span>...your best friend in the evening</span>
          </div>
        </div>
        <div className="center">
          <div className="line"></div>
        </div>
        <form className="right" onSubmit={handleSubmit}>
          <input type="text" placeholder="Your name" required ref={username} />
          <input type="text" placeholder="Email" required ref={email} />
          <input type="password" placeholder="Password" required ref={password} />
          <input type="password" placeholder="Password again" required ref={passwordAgain} />
          <button className="submitBtn" type="submit">
            Create Account
          </button>
          <span className="info">Have already account?</span>
          <Link to={'/login'}>
            <button className="registerBtn">Login</button>
          </Link>
        </form>
      </div>
      {alert && (
        <Alert className="alert" severity={errMsg !== null ? 'error' : 'success'}>
          {errMsg && errMsg}
          {successMsg && successMsg}
        </Alert>
      )}
    </div>
  );
};

export default Register;
