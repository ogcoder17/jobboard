import React, { useState } from "react";
import '../css/Login.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const Navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3000/Login', {email, password})
    .then(result => {
        console.log(result)
        if(result.data === "Welcome") {
            Navigate('/Joblistings')
        }
    })
    .catch(err => console.log(err))

  }


  return (
    <div>
    <center>
      <h4 style={{ fontFamily: "-moz-initial" }}>LOGIN</h4>
    </center>
    <br />
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            className="form-control"
            id="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
        </div>
        <button
            style={{ margin: "auto" }}
            type="submit"
            className="btn btn-info"
          >
            Submit
          </button>
        </div>
        <br />
        <br />
        
        {message && <p>{message}</p>}
      </form>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Login;