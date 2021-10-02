import {
  Avatar,
  Box,
  Grid,
  InputBase,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@material-ui/core";
import React from "react";
import { FiSearch } from "react-icons/fi";
import { useStyles } from "./styles";
import { IoFilterOutline, IoPersonCircleOutline } from "react-icons/io5";
import { HomeCardComponent, HomeSmallCardComponent } from "../../component";
import { AiOutlinePercentage, AiOutlinePieChart } from "react-icons/ai";
import { CgViewComfortable } from "react-icons/cg";
const list = [
  {
    title: "230K",
    subtitle: "Sales",
    Icon: AiOutlinePercentage,
  },
  {
    title: "8.549K",
    subtitle: "Customers",
    Icon: IoPersonCircleOutline,
  },
  {
    title: "1.432k",
    subtitle: "Products",
    Icon: CgViewComfortable,
  },
  {
    title: "$9745K",
    subtitle: "Revenue",
    Icon: AiOutlinePieChart,
  },
];
function Home() {
  const classes = useStyles();
  return (
    <Grid spacing={2} container>
      <Grid sm={12} md={9} lg={9} item>
        <Box
          className={classes.searchBox}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <FiSearch style={{ fontSize: "1.5rem", opacity: ".8" }} />
          <InputBase placeholder="Search" fullWidth />
        </Box>
        <Typography className={classes.userName} variant="h1">
          Hello David
        </Typography>
        <div className={classes.filter}>
          <p>Welcome Back</p>
          <Box className={classes.filterBox}>
            <InputBase placeholder="filter" />
            <IoFilterOutline />
          </Box>
        </div>
        <HomeCardComponent />
        <HomeSmallCardComponent />
      </Grid>
      <Grid
        md={3}
        xs={12}
        sm={12}
        className={classes.revenueColumn}
        lg={3}
        item
      >
        <Typography variant="h5">Sales Revenue</Typography>
        <List>
          {list.map(({ Icon, title, subtitle }, idx) => (
            <ListItem>
              <ListItemAvatar key={idx}>
                <Avatar style={{ background: "#E2E2E2" }}>
                  <Icon style={{ color: "#555555" }} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                className={classes.listDetails}
                primary={title}
                secondary={subtitle}
              />
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
}

export default Home;
