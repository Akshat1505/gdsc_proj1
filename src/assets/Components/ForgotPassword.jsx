import { sendPasswordResetEmail } from "firebase/auth";
import React from "react";
import { auth } from "../../firebase/firebase";

import "./Login.css";

const ForgotPassword = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailVal = e.target.email.value;
    sendPasswordResetEmail(auth, emailVal)
      .then((data) => {
        alert("Check Your Email");
      })
      .catch((err) => {
        alert(err.code);
      });
  };
  const backToLogin = () => {
    window.location.href = "/login";
  };

  return (
    <div className="forgo">
      <h1 className="forgo-pass">Forgot Password?</h1>
      <br />
      <form className="forgo-form" onSubmit={(e) => handleSubmit(e)}>
        <input name="email" />
        <br />
        <br />
        <button className="forgo-button">Reset</button>
        <button className="backlogin" onClick={backToLogin}>
          Login Page
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
