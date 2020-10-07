import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
//import Link from "@material-ui/core/Link";
import UIStyles from "./Navstyle";
import {Link} from 'react-router-dom';



function NavBar() {
  const classes = UIStyles();
  return (
    <div className="App">
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h6" color="primary">
            Blog
          </Typography>
          <Link className={classes.linkBar} to="/">
            Home
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
