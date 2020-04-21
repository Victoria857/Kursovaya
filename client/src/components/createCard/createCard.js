import React, { useState, useCallback, useEffect } from "react";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Container } from "@material-ui/core";

export default function PaymentForm() {
  const [username, setUsername] = useState({ value: "", isValid: true });
  const [cardNumber, setCardNumber] = useState({ value: "", isValid: true });
  const [expDate, setExpDate] = useState({ value: "", isValid: true });
  const [cvv, setCvv] = useState({ value: "", isValid: true });

  const usernameChangeHandler = useCallback(
    (event) => {
      setUsername({ ...username, value: event.target.value });
    },
    [username]
  );

  const cardNumberChangeHandler = useCallback(
    (event) => {
      setCardNumber({ ...cardNumber, value: event.target.value });
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
      setCvv({ ...cvv, value: event.target.value });
    },
    [cvv]
  );
  useEffect(() => {}, [username]);

  return (
    <div className="card">
      <Container>
        <form noValidate>
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
                value={username.value}
                onChange={usernameChangeHandler}
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
                value={cardNumber.value}
                onChange={cardNumberChangeHandler}
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
                value={expDate.value}
                onChange={expDateChangeHandler}
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
                value={cvv.value}
                onChange={cvvChangeHandler}
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
