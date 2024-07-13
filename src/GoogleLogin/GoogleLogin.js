import React from 'react';
import Google from '../assets/google.png';
import Git from '../assets/icons8-github-64.png';


function GoogleLogin({ setCurrentComponent, standard, setPage }) {



  return (
    <>
      <ul className="social-login">
        <li className="google-icon">
          <img src={Google} alt="Google Icon" />
          <p>Continue with Google</p>
        </li>
        <li className="git-icon">
          <img src={Git} alt="GitHub Icon" />
          <p>Continue with GitHub</p>
        </li>
      </ul>

      <div className="or" onClick={() => setPage(false)}>
        <p onClick={() => setCurrentComponent(standard === "Login" ? 'ComponentTwo' : 'ComponentThree')}>Or {standard} with email</p>
      </div>
    </>
  );
}


export default GoogleLogin;


