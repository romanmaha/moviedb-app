import React, { useRef, useState, useContext } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from './../../context/UserContext';
import { BACKEND_BASE_URL } from '../../constants';
import Alert from '@mui/material/Alert';
import './login.scss';

const Login = () => {
  //eslint-disable-next-line
  const { user, setUser } = useContext(UserContext);
  //eslint-disable-next-line
  const [alert, setAlert] = useState(false);
  //eslint-disable-next-line
  const [errMsg, setErrMsg] = useState(null);
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const user = {
      email: email.current.value,
      password: password.current.value,
    };
    try {
      const res = await axios.post(`${BACKEND_BASE_URL}/auth/login`, user);
      setUser(res.data);
      navigate('/');
    } catch (error) {
      setAlert(true);
      setTimeout(() => setAlert(false), 2000);
      setErrMsg(error.response.data);
    }
  };

  return (
    <div className="login">
      <h1 className="loginTitle">Choose a Login Method</h1>
      <div className="loginWrapper">
        <div className="left">
          <div className="leftTitle">
            Movie World <br /> <span>...your best friend in the evening</span>
          </div>
        </div>
        <div className="center">
          <div className="line"></div>
          <div className="or">OR</div>
        </div>
        <form className="right" onSubmit={submitHandler}>
          <input type="text" placeholder="Email" ref={email} />
          <input type="password" placeholder="Password" ref={password} />
          <button className="submitBtn" type="submit">
            Log In
          </button>

          <span className="info">Don`t have user account?</span>
          <Link to={'/register'}>
            <button className="registerBtn">Get Started</button>
          </Link>
        </form>
      </div>
      {alert && (
        <Alert className="alert" severity="error">
          {errMsg}
        </Alert>
      )}
    </div>
  );
};

export default Login;
