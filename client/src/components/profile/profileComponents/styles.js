import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  box: {
    minHeight: "300px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  typography: {
    color: "#a9a7a7",
  },
  errorIcon: {
    marginBottom: "15px",
  },
}));
