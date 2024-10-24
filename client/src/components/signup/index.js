import React, { useState } from "react";
import styles from "./index.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userName, password);
    axios
      .post("http://localhost:3001/register", {
        userName,
        password,
      })
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.sign_up_container}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Register</button>
      </form>
      <p>Already have an account?</p>
      <Link to="/login">Login</Link>
    </div>
  );
}

export default Register;
