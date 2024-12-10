import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [position, setPosition] = useState(""); // Employer/Job Seeker
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const Navigate = useNavigate();

  // Toggle radio button selection
  const toggleRadio = (e) => {
    setPosition(e.target.value);
  };

  // Validation logic
  const validateInputs = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const nameRegex = /^[a-zA-Z]{2,}$/;

    if (!firstname || !nameRegex.test(firstname)) {
      return "First name must contain at least 2 alphabetic characters.";
    }
    if (!lastname || !nameRegex.test(lastname)) {
      return "Last name must contain at least 2 alphabetic characters.";
    }
    if (!position) {
      return "Please select a position: Employer or Job Seeker.";
    }
    if (!email || !emailRegex.test(email)) {
      return "Enter a valid email address.";
    }
    if (!password || password.length < 8) {
      return "Password must be at least 8 characters long.";
    }
    return "";
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation
    const validationError = validateInputs();
    if (validationError) {
      setErrorMessage(validationError);
      setSuccessMessage("");
      return;
    }

    // Send data to the backend
    axios
      .post("http://localhost:3000/register", {
        firstname,
        lastname,
        email,
        password,
        position,
      })
      .then((response) => {console.log(response.data);
        setErrorMessage("");
        setSuccessMessage("Sign Up successful!");
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setPosition("");
        Navigate('/Login');
        
      })
      .catch((err) => {
        console.error(err);
        if (err.response && err.response.status === 400) {
          setErrorMessage("Account email already exists.");
        } else {
          setErrorMessage("An error occurred. Please try again.");
        }
        setSuccessMessage("");
      });
  };

  return (
    <div>
      <center>
        <h4 style={{ fontFamily: "-moz-initial" }}>SIGN UP</h4>
      </center>
      <br />
      <form onSubmit={handleSubmit}>
        <div className="container">
          <p>
            <b>
              <sup>*</sup>All fields are mandatory
            </b>
          </p>
          <div className="form-group">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstname"
              name="firstname"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              name="lastname"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <br />
          </div>
          <div>
            Signing up as:{" "}
            <label>
              <input
                type="radio"
                value="Employer"
                name="position"
                onClick={toggleRadio}
                checked={position === "Employer"}
                required
              />{" "}
              Employer&nbsp;
            </label>
            <label>
              <input
                type="radio"
                value="Job Seeker"
                name="position"
                onClick={toggleRadio}
                checked={position === "Job Seeker"}
              />{" "}
              Job Seeker
            </label>
          </div>
          <br />
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
          {errorMessage && (
            <small className="error-message" style={{ color: "red" }}>
              {errorMessage}
            </small>
          )}
          {successMessage && (
            <small className="success-message" style={{ color: "green" }}>
              {successMessage}
            </small>
          )}
          <button
            style={{ margin: "auto" }}
            type="submit"
            className="btn btn-info"
          >
            Submit
          </button>
          <br />
          <br />
        </div>
      </form>
    </div>
  );
};

export default Signup;
