import React from "react";
import "./App.css";
import { Grid } from "@material-ui/core";
import { SidebarComponent } from "./component";
import { Switch, Route } from "react-router-dom";
import { HomePage, StatsPage } from "./pages";

function App() {
  return (
    <div className="app">
      <Grid className="app-inner" container>
        <Grid className="sidebar-box" lg={2} item>
          <SidebarComponent />
        </Grid>
        <Grid className="app-page-content" sm={12} xs={12} md={12} lg={10} item>
          <Switch>
            <Route path="/stats">
              <StatsPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
