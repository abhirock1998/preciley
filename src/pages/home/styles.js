import { makeStyles } from "@material-ui/styles";
export const useStyles = makeStyles((theme) => ({
  searchBox: {
    width: "50%",
    border: "1px solid lightgray",
    borderRadius: "8px",
    padding: "4px 10px",
    marginBottom: "20px",
  },
  userName: {
    fontSize: "1.65rem",
    fontFamily: "Poppins , sans-serif",
  },
  filter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "&>p": {
      fontFamily: "Poppins , sans-serif",
    },
  },
  filterBox: {
    width: "15%",
    border: "1px solid lightgray",
    borderRadius: "8px",
    padding: "2px 6px",
    display: "flex",
    alignItems: "center",
    "&>svg": {
      fontSize: "2rem",
    },
  },
  revenueColumn: {
    borderRadius: "8px",
    height: "100%",
    border: "1px solid lightgray",
    margin: "5px  0px auto",
    background: "#000000",
    color: "#FFFFFF",
    padding: "10px",
    width: "22%",
    "&>h5": {
      fontFamily: "Poppins , sans-serif",
    },
  },
  listDetails: {
    "&>p": {
      fontFamily: "Poppins , sans-serif",
      color: "#FFFFFF",
    },
    "&>span": {
      fontFamily: "Poppins , sans-serif",
      color: "#FFFFFF",
      fontWeight: "600",
    },
  },
}));
