import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../signup/index.module.css";
import axios from "axios";
import { LoginContext } from "../context/login_context";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { isLoggedin, logInHandler } = useContext(LoginContext);

  const handleLogin = (e) => {
    e.preventDefault();
    if (isLoggedin) {
      navigate("/");
    }
    axios
      .post("http://localhost:3001/login", {
        userName,
        password,
      })
      .then((result) => {
        if (result.data === "Success") {
          logInHandler(userName);
          navigate("/");
        } else {
          alert("User does not exist");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.sign_up_container}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <p>New User?</p>
      <Link to="/register">Register here</Link>
    </div>
  );
}

export default Login;
