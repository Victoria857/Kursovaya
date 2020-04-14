import React from "react";

import Singin from "../signin/signin";
import Signup from "../signup/signup";
import { Container } from "@material-ui/core";
import { useStyles } from "../home/home.styles";

function Home() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Singin />
      <Signup />
    </Container>
  );
}

export default Home;
