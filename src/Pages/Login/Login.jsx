import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [signInState, setSignInState] = useState("Sign In");

  return (
    <div className="login">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
        className="login-logo"
      />

      <div className="login-container">
        <h2>{signInState}</h2>

        <form>
          {signInState === "Sign Up" && (
            <input type="text" placeholder="Enter Your Name" className="login-input" />
          )}
          <input type="email" placeholder="Email or phone number" className="login-input" />
          <input type="password" placeholder="Password" className="login-input" />
          <button type="submit" className="login-button">
            {signInState}
          </button>

          <div className="login-help">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="/help">Need help?</a>
          </div>
        </form>

        <div className="login-footer">
          {signInState === "Sign In" ? (
            <p onClick={() => setSignInState("Sign Up")}>
              New to Netflix? <span className="link">Sign up now</span>.
            </p>
          ) : (
            <p onClick={() => setSignInState("Sign In")}>
              Already have an account? <span className="link">Sign In now</span>.
            </p>
          )}
          <p className="login-captcha-notice">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <a href="/learn-more">Learn more.</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
