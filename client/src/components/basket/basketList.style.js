import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start"
  },
  table: {
    minWidth: 650
  },
  captionSpan: {
    fontWeight: "bold"
  },
  tableContainer: {
    marginBottom: "40px"
  },
  tableCell: {
    textAlign: "center",
    padding: "100px 0"
  },
  confirmButton: {
    marginLeft: "auto"
  }
});
