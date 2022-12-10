import React from "react";
import { makeStyles } from "@mui/styles";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
//LOCAL IMPORTS
import HeaderLogo from "./fav.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  headerApp: {
    backgroundColor: "#FFF",
    height: "auto",
  },
  logoWrap: {
    textAlign: "center",
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
          <Grid item xs={2} sm={2} md={2} lg={2}>
            <a href="https://google.com/">
              <img
                src={HeaderLogo}
                alt="Header logo"
                className={classes.logoWrap}
              />
            </a>
          </Grid>
          <Grid item xs={10} sm={10} md={10} lg={10}>
            <p style={{ color: "blue" }}>Hello</p>
          </Grid>
        </Grid>
      </AppBar>
      <Divider />
    </div>
  );
}

export default BlogHeader;
