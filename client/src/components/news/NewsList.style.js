import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    boxShadow: "none",
    backgroundColor: "#fafafa"
  },
  root: {
    minWidth: 275,
    minHeight: 350,
    display: "flex",
    flexDirection: "column"
  },
  media: {
    height: 140,
    backgroundColor: theme.palette.info.light,
    backgroundPosition: "top"
  },
  headTitle: {
    textAlign: "center"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  progressBar: {
    margin: "0 auto"
  },
  cardAction: {
    marginTop: "auto"
  }
}));
