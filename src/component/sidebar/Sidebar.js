import {
  Avatar,
  Badge,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { BiHomeAlt } from "react-icons/bi";
import { AiOutlineTrophy } from "react-icons/ai";
import { GiDogHouse } from "react-icons/gi";
import {
  IoPersonOutline,
  IoStatsChartOutline,
  IoSettingsOutline,
  IoAppsOutline,
} from "react-icons/io5";
import { useStyles } from "./styles";
import { Link } from "react-router-dom";
function Sidebar() {
  const [active, setActive] = useState(0);
  const classes = useStyles();
  const mySidebar = [
    {
      title: "Home",
      Icon: BiHomeAlt,
    },
    {
      title: "Projects",
      Icon: AiOutlineTrophy,
    },
    {
      title: "Billings",
      Icon: GiDogHouse,
    },
    {
      title: "Team Members",
      Icon: IoPersonOutline,
    },
    {
      title: "Stats",
      Icon: IoStatsChartOutline,
    },
    {
      title: "Settings",
      Icon: IoSettingsOutline,
    },
  ];
  return (
    <div className={classes.sidebar}>
      <IoAppsOutline className={classes.sidebarIcon} />
      <List>
        {mySidebar.map((link, i) =>
          i === 0 ? (
            <Link
              onClick={() => setActive(i)}
              className={classes.anchor}
              to="/"
            >
              <ListItem
                style={{ borderLeft: i === active ? "2px solid #000" : "" }}
                className={classes.sidebarCard}
                key={i}
              >
                <ListItemIcon>
                  <link.Icon className="my-icon" />
                </ListItemIcon>
                <ListItemText primary={link.title} />
              </ListItem>
            </Link>
          ) : i === 4 ? (
            <Link
              onClick={() => setActive(i)}
              className={classes.anchor}
              to="/stats"
            >
              <ListItem
                style={{ borderLeft: i === active ? "2px solid #000" : "" }}
                className={classes.sidebarCard}
                key={i}
              >
                <ListItemIcon>
                  <link.Icon className="my-icon" />
                </ListItemIcon>
                <ListItemText primary={link.title} />
              </ListItem>
            </Link>
          ) : (
            <ListItem
              onClick={() => setActive(i)}
              style={{ borderLeft: i === active ? "2px solid #000" : "" }}
              className={classes.sidebarCard}
              key={i}
            >
              <ListItemIcon>
                <link.Icon className="my-icon" />
              </ListItemIcon>
              <ListItemText primary={link.title} />
            </ListItem>
          )
        )}

        <Box
          style={{
            position: "absolute",
            display: "flex",
            bottom: "-35%",
            left: "30%",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Badge
            style={{ marginBottom: "10px" }}
            variant="dot"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            color="primary"
          >
            <Avatar
              src="https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg"
              alt="user-photo"
            />
          </Badge>
          <Typography>David Malan</Typography>
        </Box>
      </List>
    </div>
  );
}

export default Sidebar;
