import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  async function onSubmit(e) {
    e.preventDefault();
    const res = await axios.get(
      `/api/user?username=${username}&password=${password}`
    );
    const user = res.data;

    if (user) {
      history.push(`/user.${user._id}`);
    } else {
      alert("Invalid Credential");
    }
  }

  return (
    <div className="container mt-5">
      <h1 className="text-primary">Login</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            className="form-control"
            placeholder="Enter username..."
            value={username}
            onChange={e => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password..."
            value={password}
            onChange={e => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button className="btn btn-primary btn-lg btn-block">Submit</button>
        <Link className="btn btn-secondary btn-lg btn-block" to="/register">
          Register
        </Link>
        <p className="fixed-bottom container text-center">
          TRENCHES &copy; 2020
        </p>
      </form>
    </div>
  );
}
