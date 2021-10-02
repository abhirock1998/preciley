import { Avatar, Grid, Typography } from "@material-ui/core";
import React from "react";
import { BsEye } from "react-icons/bs";
import { AiOutlineCompass } from "react-icons/ai";
import { HiOutlineHome } from "react-icons/hi";
import { useStyles } from "./styles";
function HomeCard() {
  const classes = useStyles();
  return (
    <Grid className={classes.cardWrapper} container>
      <Grid xs={4} sm={4} md={4} className={classes.myCard} lg={4} item>
        <Avatar className={classes.icon}>
          <BsEye />
        </Avatar>
        <span>Views</span>
        <Typography variant="h1">500</Typography>
        <span>Per Day</span>
      </Grid>
      <Grid xs={4} sm={4} md={4} className={classes.myCard} lg={4} item>
        <Avatar className={classes.icon}>
          <AiOutlineCompass />
        </Avatar>
        <span>Visits</span>
        <Typography variant="h1">2000</Typography>
        <span>Per minute</span>
      </Grid>
      <Grid xs={4} md={4} sm={4} className={classes.myCard} lg={4} item>
        <Avatar className={classes.icon}>
          <HiOutlineHome />
        </Avatar>
        <span>Orders</span>
        <Typography variant="h1">5100</Typography>
        <span>Per Day</span>
      </Grid>
    </Grid>
  );
}

export default HomeCard;
