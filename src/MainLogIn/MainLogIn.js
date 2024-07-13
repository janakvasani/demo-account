import React, { useState } from 'react';
import './MainLogIn.scss';
import GoogleLogin from '../GoogleLogin/GoogleLogin';
import SignUp from "../SignUp/SignUp";
import LoginForm from "../LoginForm/LoginForm";

function MainLogIn({isClose,clickClose,}) {

 
  const [standard, setStandard] = useState('Login');
  const [currentComponent, setCurrentComponent] = useState('ComponentTwo');
  const [page, setPage] = useState(true);



  return (
    isClose ?(<div  className="login-signup-page">
      <div className="login-main-page">
        <div className="login-page">
          <div className="login-container">
            <span onClick={clickClose} aria-hidden="true">&times;</span>

            <div className="label-title">
              <h1>{standard}</h1>
              <p>Please sign up or login with your details</p>
            </div>

            <ul className="login-sign-up-buttons">
              <li
                onClick={() => {
                  setCurrentComponent('ComponentTwo');
                  setStandard('Login');
                }}
                className={standard === 'Login' ? 'i-active-button' : ""}
              >
                Login
              </li>
              <li
                onClick={() => {
                  setCurrentComponent('ComponentThree');
                  setStandard('Sign up');
                }}
                className={standard === 'Sign up' ? 'i-active-button' : ""}
              >
                Sign up
              </li>
            </ul>
            {page === true ? <GoogleLogin standard={standard} setCurrentComponent={setCurrentComponent} setPage={setPage} /> :
              standard === 'Login' ? <LoginForm setPage={setPage} /> : standard === 'Sign up' && <SignUp setPage={setPage} />}
          </div>
        </div>
      </div>
    </div>):null
  

  );
}

export default MainLogIn;
