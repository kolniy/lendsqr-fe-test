import Logo from '../Logo/Logo'
import loginPageImage from "../../images/login-page-image.png"

import "../../styles/abstract/_variables.scss"
import "./login.scss"

const Login = () => {
  return <>
    <div className="login-page__container">

       <div className="login-page__container-image-container">
          <div className="login-page__contents-container">
            <div className="logo-image__container">
              <Logo />
            </div>
            <div className="illustrator-image__container">
                <img src={loginPageImage} alt='...' />
            </div>
          </div>
       </div>
       <div className="login-page__container-form-container">
          <div className="login-page__contents-container">
             <div className="form__contents">
               <h2>Welcome!</h2>
                <p>Enter details to login</p>
             </div>
          </div>
       </div>
    </div>
  </>
}

export default Login