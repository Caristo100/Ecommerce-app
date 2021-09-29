import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
  };
  const Register = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/263px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login_container">
        <h1>Sign-in</h1>
        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="Password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={signIn} className="login_button">
            Sign In
          </button>
        </form>
        <button onClick={Register} className="login_register">
          Create your Account
        </button>
      </div>
    </div>
  );
}

export default Login;
