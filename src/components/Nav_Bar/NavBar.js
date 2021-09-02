import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
//import Link from "@material-ui/core/Link";
import UIStyles from "./Navstyle";
import { Link } from "react-router-dom";

function NavBar() {
  const classes = UIStyles();
  return (
    <div className="App">
      {/* <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h6" color="primary">
            Blog
          </Typography>
          <Link className={classes.linkBar} to="/">
            Home
          </Link>
          <Link className={classes.linkBar} to="/AboutUs">
            About Us
          </Link>
        </Toolbar>
      </AppBar> */}

      <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
        <a className="navbar-brand ml-4 
        " href="#">
          <h1>Blog</h1>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-align-center"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto mx-auto">
            <li className="nav-item active">
              <Link className="nav-link" id="home" to="/">
                Home
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" id="aboutus" to="/AboutUs">
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" id="categories" href="#">
                Categories
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" id="contactus" href="#">
                Contact us
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" href="#">
                <i className="fas fa-ellipsis-v"></i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
