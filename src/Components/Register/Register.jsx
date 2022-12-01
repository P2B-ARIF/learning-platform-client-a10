import React, { useContext, useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const Register = () => {
  const { providerLogin, createUser, updateUserProfile, githubLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [accepted, setAccepted] = useState(false);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        handleUserUpdate(name);
      })
      .catch((error) => {
        console.log(error, "Error ID Pass");
        setError(error.message);
      });
  };

  const handleGoogleSignIN = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error, "Error Google Login"));
  };

  const handleUserUpdate = (name) => {
    const profile = {
      displayName: name,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => console.log(error, "Error Update Profile"));
  };
  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
    // console.log(event.target.checked);
  };

  const handleGithubSignIN = () => {
    githubLogin(githubProvider);
  };

  return (
    <div className="register">
      <form onSubmit={handleRegister}>
        <h2 className="pt-3">Create Account</h2>
        <div className="group">
          <div className="input-group">
            <input className="re-input rounded" type="text" name="name" placeholder="Your Name" />
            <input
              className="re-input rounded"
              type="email"
              name="email"
              placeholder="Your Email"
            />
            <input
              className="re-input rounded"
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <p className="py-2 ">
            <small className="d-flex">
              <input onClick={handleAccepted} className="me-1" type="checkbox" name="" id="" />I
              agree all statements in{" "}
              <Link className="text-white" to="/TermsAndConditions">
                Terms of service
              </Link>
            </small>
          </p>
          <p className="text-danger">{error}</p>
          <br />
          <button disabled={!accepted} className="btn btn-outline-light w-100">
            Register
          </button>
        </div>
        <div className="d-flex align-items-center mt-2 justify-content-center">
          <p onClick={handleGithubSignIN} className="btn btn-outline-secondary me-3">
            <FaGithub /> Github
          </p>

          <p onClick={handleGoogleSignIN} className="btn btn-outline-success">
            <FaGoogle /> Google
          </p>
        </div>
        <p className="mt-3 text-center">
          <small>{error}</small>
          <small>
            Have already an account? <Link to="/login">Login here</Link>{" "}
          </small>
        </p>
      </form>
    </div>
  );
};

export default Register;
