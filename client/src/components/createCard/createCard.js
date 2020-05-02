import React, { useState, useCallback, useEffect } from "react";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Container } from "@material-ui/core";

import { useHistory } from "react-router-dom";

export default function PaymentForm() {
  const [username, setUsername] = useState({ value: "", isValid: true });
  const [cardNumber, setCardNumber] = useState({ value: 0, isValid: true });
  const [expDate, setExpDate] = useState({ value: "", isValid: true });
  const [cvv, setCvv] = useState({ value: 0, isValid: true });

  const history = useHistory();

  const usernameChangeHandler = useCallback(
    (event) => {
      setUsername({ ...username, value: event.target.value });
    },
    [username]
  );

  const cardNumberChangeHandler = useCallback(
    (event) => {
      setCardNumber({ ...cardNumber, value: +event.target.value });
    },
    [cardNumber]
  );
  const expDateChangeHandler = useCallback(
    (event) => {
      setExpDate({ ...expDate, value: event.target.value });
    },
    [expDate]
  );

  const cvvChangeHandler = useCallback(
    (event) => {
      setCvv({ ...cvv, value: +event.target.value });
    },
    [cvv]
  );
  const submitHandler = useCallback(
    (event) => {
      event.preventDefault();
      event.target.reset();
    },
    [username, cardNumber, expDate, cvv]
  );

  useEffect(() => {
    if (!localStorage.getItem("jwt-token")) {
      history.push("/");
    }
  }, []);

  console.log(cardNumber, username, expDate, cvv);
  return (
    <div className="card">
      <Container>
        <form noValidate onSubmit={(e) => submitHandler(e)}>
          <Typography variant="h4" gutterBottom>
            Создание карты
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                error={!username.isValid}
                required
                id="cardName"
                name="cardName"
                label="Имя Владельца"
                fullWidth
                // value={username.value}
                onChange={(e) => usernameChangeHandler(e)}
                helperText={
                  !username.isValid ? "такого пользователя не существует" : ""
                }
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                error={!cardNumber.isValid}
                required
                id="cardNumber"
                name="cardNumber"
                label="Номер карты"
                fullWidth
                // value={cardNumber.value}
                onChange={(e) => cardNumberChangeHandler(e)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                error={!expDate.isValid}
                id="expDate"
                name="expDate"
                label="Дата истечения срока"
                fullWidth
                // value={expDate.value}
                onChange={(e) => expDateChangeHandler(e)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                error={!cvv.isValid}
                id="cvv"
                name="cvv"
                label="CVV"
                helperText="Последние три цифры на обороте карты"
                fullWidth
                // value={cvv.value}
                onChange={(e) => cvvChangeHandler(e)}
              />
            </Grid>
          </Grid>
          <Button type="submit" variant="contained" color="primary">
            Зарегестрировать карту
          </Button>
        </form>
      </Container>
    </div>
  );
}
