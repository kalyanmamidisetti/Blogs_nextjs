import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  btnWrap: {
    color: "red",
  },
}));

function About(props) {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <div className={classes.main}>
        <Typography variant="h4" component="h1" gutterBottom>
          MUI v5 + Next.js with TypeScript example
        </Typography>
        <Box maxWidth="sm">
          <Button variant="contained" href="/" className={classes.btnWrap}>
            Go to the home page
          </Button>
        </Box>
      </div>
    </Container>
  );
}

export default About;
