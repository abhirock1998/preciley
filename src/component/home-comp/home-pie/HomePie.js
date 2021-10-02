import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";
import { PieChart } from "react-minimal-pie-chart";
import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";
function HomePie() {
  const classes = useStyles();
  const card = [
    {
      title: "Sales",
      smalltitle: "Total Sales today",
      qunatity: 500,
      finished: 55,
      top: false,
      bgcolor: "#FFEFE2",
      color: "#E5B89A",
    },
    {
      title: "Profit",
      smalltitle: "Per day ratio",
      qunatity: 150,
      finished: 30,
      top: false,
      bgcolor: "#F0FCF0",
      color: "#B1D8B3",
    },
    {
      title: "Orders",
      smalltitle: "Total Order today",
      qunatity: 1000,
      finished: 80,
      top: true,
      bgcolor: "#E6F5FA",
      color: "#95C5D5",
    },
    {
      title: "Visits",
      smalltitle: "Total Visits today",
      qunatity: 400,
      finished: 70,
      top: true,
      bgcolor: "#F5F6FA",
      color: "#6E6D72",
    },
  ];
  return (
    <Grid justifyContent="space-between" wrap="wrap" container>
      {card.map(
        ({ title, smalltitle, qunatity, finished, top, bgcolor, color }, i) => (
          <Grid
            style={{ background: bgcolor }}
            className={classes.cardWrapper}
            key={i}
            item
          >
            <div className={classes.innerCard}>
              {!top ? (
                <FiArrowDownRight
                  style={{ color: color }}
                  className={classes.innerCardIcon}
                />
              ) : (
                <FiArrowUpRight className={classes.innerCardIcon} />
              )}
              <Box className={classes.cardDetails}>
                <Typography variant="h6">{title}</Typography>
                <Typography variant="h5">{smalltitle}</Typography>
                <Typography variant="h2">${qunatity}</Typography>
              </Box>
              <div className={classes.pie}>
                <PieChart
                  lineWidth={14}
                  startAngle={-90}
                  data={[
                    {
                      title: "Complete",
                      value: finished,
                      color: "rgba(0,0,0,.8)",
                    },
                    {
                      title: "Left",
                      value: 100 - finished,
                      color: "rgba(0,0,0,.1)",
                    },
                  ]}
                />
                <span>{finished}%</span>
              </div>
            </div>
          </Grid>
        )
      )}
    </Grid>
  );
}

export default HomePie;
