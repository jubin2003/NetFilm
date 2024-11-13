import React, { useState } from "react";
import "./Login.css";
import { login, signup } from "../../firebase";

function Login() {
  const [signInState, setSignInState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const user_auth = async (event)=>{
  event.preventDefault();
  if(signInState==='Sign In'){
    await login(email,password)
  }else{
    await signup(name,email,password)
  }
}
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
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter Your Name"
              className="login-input"
            />
          )}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email or phone number"
            className="login-input"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="login-input"
          />
          <button onClick={user_auth}type="submit" className="login-button">
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
