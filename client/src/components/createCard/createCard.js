import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export default function PaymentForm() {
  return (
    <div className="card">
      <form noValidate>
        <Typography variant="h4" gutterBottom>
          Создание карты
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField required id="cardName" label="Имя Владельца" fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField required id="cardNumber" label="Номер карты" fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="expDate"
              label="Дата истечения срока"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cvv"
              label="CVV"
              helperText="Последние три цифры на обороте карты"
              fullWidth
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" color="primary">
          Зарегестрировать карту
        </Button>
      </form>
    </div>
  );
}
