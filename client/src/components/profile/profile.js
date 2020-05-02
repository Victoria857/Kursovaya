import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";
import { getJwt } from "../../utils/";
import axios from "axios";

import CardList from "./profileComponents/cardList";

import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import { useStyles } from "./profile.styles";

const URL_GET_USER_WITH_TOKEN = "http://localhost:5000/auth/getUser";

const Profile = ({ setIsAuth }) => {
  const classes = useStyles();

  const history = useHistory();
  const signOutHandleClick = () => {
    localStorage.removeItem("jwt-token");
    history.push("/");
    setIsAuth(false);
  };

  const [userAuth, setUserAuth] = useState({ user: undefined });

  useEffect(() => {
    if (!localStorage.getItem("jwt-token")) {
      history.push("/");
    }
    getUser();
  }, []);

  async function getUser() {
    try {
      const jwt = getJwt();
      if (!jwt.hasToken) {
        setUserAuth({
          user: null,
        });
        return;
      }

      const result = await axios.get(URL_GET_USER_WITH_TOKEN, {
        headers: { Authorization: jwt.token },
      });
      setUserAuth({
        ...result.data,
      });
    } catch (error) {
      console.log("start trace", error, "end trace");
    }
  }
  return (
    <Container className={classes.container}>
      <div className={classes.profileTitleWrapper}>
        <Typography variant="h2" component="h3">
          Здравствуйте, {userAuth.login}
        </Typography>

        <Button
          variant="contained"
          color="secondary"
          onClick={signOutHandleClick}
        >
          Выйти из аккаунта
        </Button>
      </div>
      <CardList />
    </Container>
  );
};

export default Profile;
