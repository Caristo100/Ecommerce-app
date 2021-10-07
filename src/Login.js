import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./database";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, Password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };
  const Register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, Password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
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
