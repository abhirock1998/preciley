import { makeStyles } from "@material-ui/styles";
export const useStyles = makeStyles((them) => ({
  tableHeader: {
    background: "rgba(0,0,0,.2)",
    "&>tr": {
      color: "#fff",
    },
  },
  eName: {
    fontFamily: "Poppins , sans-serif",
    fontSize: ".9rem",
    marginLeft: "10px",
  },
  container: {
    height: "96vh",
  },
  inputStyle: {
    fontFamily: "Poppins , sans-serif",
    fontSize: ".9rem",
  },
}));
