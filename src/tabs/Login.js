import React from "react";
import "./Login.css";

function Login() {
  const signIn = () => {};
  return (
    <div className="login">
      <div className="login__logo">
        <img src="/images/logo.PNG" alt=""></img>
      </div>

      <button type="submit" onClick={signIn}>
        Sign In
      </button>
    </div>
  );
}

export default Login;
