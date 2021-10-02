import { makeStyles } from "@material-ui/styles";
export const useStyles = makeStyles((them) => ({
  sidebar: {
    borderLeft: "1px solid gray",
    position: "relative",
    height: "100%",
  },
  sidebarIcon: {
    fontSize: "2rem",
    margin: "10px",
    opacity: ".8",
  },
  sidebarCard: {
    marginBottom: "15px",
    "&:hover": { cursor: "pointer" },
    "&>div:last-of-type>span": {
      textDecoration: "none",
    },
  },
  anchor: {
    textDecoration: "none",
    fontSize: "1rem",
    fonFamily: "Roboto , Helvetica, Arial, sans-serif",
    fontWeight: "400",
    lineHeight: "1.5",
    letterSpacing: "0.00938em",
    color: "#000",
  },
}));
