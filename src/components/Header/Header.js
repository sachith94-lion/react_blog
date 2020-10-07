import React from "react";
import { Box } from "@material-ui/core";
import UIStyles from "./Headerstyle";

function Header() {
    const classes = UIStyles();
    return (
      <div>
        <Box className={classes.hero}>
        <Box>React Blog</Box>
      </Box>
      </div>
    );
  }
  
  export default Header;