import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import frontend from "../images/frontend.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  frontend: {
    width: 550,
    height: 550,
  },
  services: {
      
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.services}>Services I Provide</div>
      <Grid container spacing={0} direction="row-reverse">
        <Grid item xs={12} sm={12} md={6}></Grid>
        <Grid item xs={12} sm={12} md={6}>
          <div className={classes.frontend}>
            <img src={frontend} alt="frontend" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
