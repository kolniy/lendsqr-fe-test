import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";
import loginPageImage from "../../images/login-page-image.png";

import "../../styles/abstract/_variables.scss";
import "./login.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordDisplay, setIsPasswordDisplay] = useState(true);
  const [errors, setErrors] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const togglePasswordDisplay = () => setIsPasswordDisplay(!isPasswordDisplay);

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value) ? "" : "Please enter a valid email address.";
  };

  const validatePassword = (value: string) => {
    return value.length >= 6
      ? ""
      : "Password must be at least 6 characters long.";
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate inputs
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    if (emailError || passwordError) {
      setErrors({ email: emailError, password: passwordError });
    } else {
      setErrors({ email: "", password: "" });
      navigate("/dashboard/users");
    }
  };

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
              <form onSubmit={handleFormSubmit} className="form">
                <div className="form-group">
                  <input
                    className="form-input"
                    required
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                  {errors.email && (
                    <p style={{ color: "red", fontSize: "12px" }}>
                      {errors.email}
                    </p>
                  )}
                </div>
                <div className="form-group">
                  <div className="form-input__container">
                    <input
                      type={isPasswordDisplay ? "password" : "text"}
                      required
                      placeholder="Password"
                      className="input-text"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div
                      onClick={togglePasswordDisplay}
                      className="input-cta__text"
                    >
                      show
                    </div>
                  </div>
                  {errors.password && (
                    <p style={{ color: "red", fontSize: "12px" }}>
                      {errors.password}
                    </p>
                  )}
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
