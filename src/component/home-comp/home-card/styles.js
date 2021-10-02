import { makeStyles } from "@material-ui/styles";
export const useStyles = makeStyles((them) => ({
  myCard: {
    padding: "10px",

    "&>span": {
      fontSize: ".8rem",
      opacity: ".8",
      fontWeight: "500",
      fontFamily: "Poppins , sans-serif",
    },
    "&>h1": {
      fontSize: "2.5rem",
      fontWeight: "500",
      fontFamily: "Poppins , sans-serif",
    },
  },
  cardWrapper: {
    background: "#F9F8F4",
    padding: "10px 20px",
    borderRadius: "8px",
    marginTop: "15px",
  },
  icon: {
    color: "#000",
    opacity: ".5",
  },
}));
