"use client";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
//LOCAL IMPORTS
import HeaderLogo from "../../public/fav.png";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  headerApp: {
    backgroundColor: "#FFF",
    height: "auto",
  },
  logoWrap: {
    textAlign: "center",
  },
  logo: {
    width: "3.5rem",
    height: "3.5rem",
  },
}));

function BlogHeader(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.headerApp}>
        <Grid container spacing={1}>
          <Grid item xs={2} sm={2} md={2} lg={2} className={classes.logoWrap}>
            <a href="https://google.com/">
              <img
                src={HeaderLogo}
                alt="Header logo"
                className={classes.logo}
              />
            </a>
          </Grid>
          <Grid item xs={10} sm={10} md={10} lg={10}>
            <p style={{ color: "red" }}>Hello</p>
          </Grid>
        </Grid>
      </AppBar>
      <Divider />
    </div>
  );
}

export default BlogHeader;
