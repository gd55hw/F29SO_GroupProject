import React from "react";
import "./Login.css";
import "../firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Login() {
  const [state, dispatch] = useStateValue();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        })
        console.log(result);
      })
      .catch((error) => alert(error.message));
  };
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
