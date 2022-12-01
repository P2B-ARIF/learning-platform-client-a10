import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { FaBars, FaMoon, FaSun, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import logo from "./../../../Images/logo.png";
import "./Header.css";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const {user, setOpen , open , logOut} = useContext(AuthContext)

  console.log(user);
  const handleSignOut = () => {
    logOut()
    .then(()=>{})
    .catch(error => console.log(error , "Error Sign OUt"))
  };












  const handleToggle = () => {
    setToggle(!toggle);
    if (toggle) {
      document.querySelector("body").style.background = "white";
    } else {
      document.querySelector("body").style.background = "#b9eeff";
    }
  };

  return (
    <header>
      <div className="h-nav">
        <div className="logo">
          <img src={logo} alt="" />
          <h3>ZerOne School</h3>
          &nbsp;
          <h5 onClick={() => handleToggle()} className="ms-3 mt-2 toggle">
            {toggle ? (
              <>
                <FaMoon />
                Sky
              </>
            ) : (
              <div className="text-white">
                <FaSun />
                Light
              </div>
            )}
          </h5>
        </div>
        <div className="nav-menu">
          <span onClick={() => setOpen(!open)} className="menu-btn">
            <FaBars /> MENU
          </span>
          <></>
          <div className={`h-menu ${open ? "d-none" : ""}`}>
            <Link to="/">Home</Link>
            <Link to="/course">Courses</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/FAQ">FAQ</Link>
            {/* <Link onClick={handleSignOut}>Sign-Out</Link> */}

            {user?.uid ? (
              <>
                <Link onClick={handleSignOut}>Sign-Out</Link>
                <div className="profile ">
                  <p>{user?.displayName}</p>
                  {user?.photoURL ? (
                    <img title={user?.displayName} src={user?.photoURL} alt="" />
                  ) : (
                    <FaUserAlt />
                  )}
                </div>
              </>
            ) : (
              <>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
