import { makeStyles } from "@material-ui/styles";
export const useStyles = makeStyles((them) => ({
  innerCard: {
    display: "flex",
    alignItems: "center",
    padding: "30px",
    position: "relative",
    justifyContent: "space-between",
  },
  innerCardIcon: {
    position: "absolute",
    right: "10px",
    top: "10px",
    fontSize: "1.2rem",
  },
  cardDetails: {
    "&>h6": {
      fontWeight: "300",
      fontFamily: "Poppins , sans-serif",
      fontSize: ".8rem",
    },
    "&>h5": {
      fontWeight: "400",
      fontFamily: "Poppins , sans-serif",
      fontSize: "1rem",
    },
    "&>h2": {
      fontWeight: "600",
      fontFamily: "Poppins , sans-serif",
      fontSize: "1.5rem",
    },
  },
  pie: {
    height: "70px",
    width: "70px",
    position: "relative",
    "&>span": {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      fontWeight: "500",
      fontFamily: "Poppins , sans-serif",
    },
  },

  cardWrapper: {
    borderRadius: "8px",
    width: "49%",
    margin: "5px 0px",
  },
}));
