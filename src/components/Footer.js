import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "#272727",
    padding: 40,
    marginTop: 100,
    fontFamily: "Quicksand, sans-serif",
    fontSize: 20,
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
      paddingTop: 30,
      paddingBottom: 30,
      paddingRight: 0,
      paddingLeft: 0,
      marginTop: 70,
    },
  },
  name: {
    color: "white",
    textAlign: "center",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.name}>
        Made with <FontAwesomeIcon icon={faHeart} color={"white"} /> by
        Saifullah Amin
      </div>
    </div>
  );
}
