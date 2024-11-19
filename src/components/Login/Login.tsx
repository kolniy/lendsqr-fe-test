import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";
import loginPageImage from "../../images/login-page-image.png";

import "../../styles/abstract/_variables.scss";
import "./login.scss";

const Login = () => {
  const [isPasswordDisplay, setIsPasswordDisplay] = useState(true);
  const navigate = useNavigate();

  const navigateToDashboard = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/dashboard/users");
  };

  const togglePasswordDisplay = () => setIsPasswordDisplay(!isPasswordDisplay);

  return (
    <>
      <div className="login-page__container">
        <div className="login-page__container-image-container">
          <div className="login-page__contents-container">
            <div className="logo-image__container">
              <Logo />
            </div>
            <div className="illustrator-image__container">
              <img src={loginPageImage} alt="..." />
            </div>
          </div>
        </div>
        <div className="login-page__container-form-container">
          <div className="login-page__contents-container">
            <div className="form__contents">
              <h2>Welcome!</h2>
              <p>Enter details to login</p>
              <form onSubmit={navigateToDashboard} className="form">
                <div className="form-group">
                  <input
                    className="form-input"
                    required
                    placeholder="Email"
                    type="email"
                  ></input>
                </div>
                <div className="form-group">
                  <div className="form-input__container">
                    <input
                      type={isPasswordDisplay ? "password" : "text"}
                      required
                      placeholder="Password"
                      className="input-text"
                    />
                    <div
                      onClick={togglePasswordDisplay}
                      className="input-cta__text"
                    >
                      show
                    </div>
                  </div>
                </div>
                <p className="forgot-password__text">forgot password?</p>
                <button type="submit" className="btn-login__click">
                  Log In
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
