import React from "react";

import Signin from "../signin/signin";
import Signup from "../signup/signup";
import { Container } from "@material-ui/core";
import { useStyles } from "./auth.styles";

function Auth() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Signin />
      <Signup />
    </Container>
  );
}

export default Auth;
