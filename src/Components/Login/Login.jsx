import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useState } from "react";
import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import "./Login.css";

const Login = () => {
  const { providerLogin, signIn, githubLogin } = useContext(AuthContext);
  const [error, setError] = useState("");

  const githubProvider = new GithubAuthProvider();
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error, "Error Sign IN");
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

  const handleGithubSignIN = () => {
    githubLogin(githubProvider);
  };

  return (
    <div className="login">
      <form onSubmit={handleLogin}>
        <h2 className="pt-3">Login Account</h2>
        <div className="group">
          <div className="input-group">
            <input
              className="re-input rounded"
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <input
              className="re-input rounded"
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <p className="text-danger">{error}</p>
          </div>

          <button className="btn btn-primary w-100">Login</button>
          <div className="d-flex align-items-center mt-2 justify-content-center">
            <p onClick={handleGithubSignIN} className="btn btn-outline-light me-3">
              <FaGithub /> Github
            </p>

            <p onClick={handleGoogleSignIN} className="btn btn-outline-light">
              <FaGoogle /> Google
            </p>
          </div>
        </div>
        <p className="mt-3 text-center">
          <small>
            Create an account? <Link to="/register">Register here</Link>{" "}
          </small>
        </p>
      </form>
    </div>
  );
};

export default Login;
