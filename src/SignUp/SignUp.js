import React, { useState } from 'react';
import "./SignUp.scss";
// import { Link } from 'react-router-dom';

function SignUp({ setPage }) {
    const [passwordType, setPasswordType] = useState("password");
    const [passwordToggleText, setPasswordToggleText] = useState("Show password");

    const handlePasswordToggle = () => {
        if (passwordType === "password") {
            setPasswordType("text");
            setPasswordToggleText("Hide password");
        } else {
            setPasswordType("password");
            setPasswordToggleText("Show password");
        }
    };

    return (
        <>
            <div className="signup-form">
                <div className="form-group">
                    <div className="icon-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                        </svg>
                    </div>
                    <div className="input-wrapper">
                        <label>Email address</label><br />
                        <input type="text" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="icon-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-lock" viewBox="0 0 16 16">
                            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1" />
                        </svg>
                    </div>
                    <div className="input-wrapper">
                        <label>Password</label><br />
                        <div className="password-container">
                            <input type={passwordType} />
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="icon-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-lock" viewBox="0 0 16 16">
                            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1" />
                        </svg>
                    </div>
                    <div className="input-wrapper">
                        <label>Re-enter password</label><br />
                        <div className="password-container">
                            <input type={passwordType} />
                        </div>
                    </div>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="showPasswordCheckbox" onClick={handlePasswordToggle} />
                    <label className="form-check-label mx-2" htmlFor="showPasswordCheckbox">
                        {passwordToggleText}
                    </label>
                </div>
                </div>
                
                <div className="actions-signup">
                    <button>Sign Up</button> <br /> 
                <p onClick={()=>setPage(true)}>Go back</p>
                </div>
        </>
    );
}

export default SignUp;

