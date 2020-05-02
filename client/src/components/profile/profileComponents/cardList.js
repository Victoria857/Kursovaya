import React, { useState } from "react";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

import { useStyles } from "./styles";

const CardList = () => {
  const [cards, setCards] = useState([]);
  const classes = useStyles();
  return (
    <Box boxShadow={2}>
      {!cards.length && (
        <Box className={classes.box}>
          <ErrorOutlineIcon className={classes.errorIcon} fontSize="large" />
          <Typography className={classes.typography} variant="h4">
            У вас нет активных карт
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default CardList;
