/* eslint-disable react/jsx-pascal-case */
// import React, { useRef, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import myimage from "../images/saif.png";
import flag from "../images/pakistan.png";
// import useWebAnimations from "@wellyshen/use-web-animations";
import Typist from "react-typist";
import TypistLoop from "react-typist-loop";
import "../../node_modules/react-typist/dist/Typist.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 110,
    fontFamily: "Quicksand, sans-serif",
    color: "#363636",
    [theme.breakpoints.down("xs")]: {
      marginTop: 60,
    },
  },
  myimage: {
    width: "100%",
  },
  myImageDiv: {
    width: "60%",
    margin: "auto",
    [theme.breakpoints.down("md")]: {
      width: "70%",
    },
    [theme.breakpoints.down("md")]: {
      width: "60%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "80%",
    },
  },
  imageGrid: {
    // display: "flex",
    // justifyContent: "center",
  },
  greetings: {
    fontSize: 50,
    fontWeight: 500,
    width: "100%",
    [theme.breakpoints.down("md")]: {
      fontSize: 40,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 35,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 23,
    },
  },
  text: {
    width: "fit-content",
    paddingTop: 100,
    margin: "auto",
    [theme.breakpoints.down("md")]: {
      paddingTop: 70,
      //   width: "90%",
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: 50,
      textAlign: "center",
      //   width: "90%",
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: 30,
      //   width: "90%",
    },
  },
  country: {
    fontWeight: 500,
    fontSize: 30,
    [theme.breakpoints.down("md")]: {
      fontSize: 25,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 16,
    },
  },
  flag: {
    height: 30,
    marginBottom: -6,
    [theme.breakpoints.down("xs")]: {
      height: 20,
      marginBottom: -3,
    },
    // transform: "rotate(-6deg)",
  },
  skill: {
    // opacity: 0,
  },
  animationDiv: {
    display: "flex",
    fontWeight: 500,
    fontSize: 30,
    marginTop: 50,
    [theme.breakpoints.down("md")]: {
      fontSize: 25,
      marginTop: 30,
    },
    [theme.breakpoints.down("sm")]: {
      display: "block",
      marginTop: 20,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
      marginTop: 15,
    },
  },
  typistLoop: {
    marginLeft: 7,
  },
}));

export default function Home() {
  const classes = useStyles();

  // const skillRef = useRef(null);

  // useWebAnimations({
  //   ref: skillRef,
  //   keyframes: [{ opacity: 0 }, { opacity: 1 }, { opacity: 0 }],
  //   timing: {
  //     duration: 3000,
  //     easing: "ease-in-out",
  //     delay: 0,
  //     iterations: Infinity,
  //   },
  // });

  return (
    <div className={classes.root}>
      <Grid container spacing={0} direction="row-reverse">
        <Grid item xs={12} sm={12} md={6} className={classes.imageGrid}>
          <div className={classes.myImageDiv}>
            <img
              src={myimage}
              className={classes.myimage}
              alt="Saifullah Amin"
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <div className={classes.text}>
            <div className={classes.greetings}>Hi! I am Saifullah Amin</div>
            <div className={classes.country}>
              from Pakistan{" "}
              <img src={flag} alt="pakistan" className={classes.flag} />
            </div>
            <div className={classes.animationDiv}>
              <span>I'm a</span>
              <div className={classes.typistLoop}>
                <TypistLoop interval={0}>
                  {[
                    "Software Engineering Student",
                    "Programmer",
                    "React Developer",
                    "Cloud Computing Enthusiast",
                  ].map((text) => (
                    <Typist key={text} startDelay={1000} blink={true}>
                      {text}
                      <Typist.Backspace count={text.length} delay={1000} />
                    </Typist>
                  ))}
                </TypistLoop>
              </div>
            </div>
            <div>
              {/* <FontAwesomeIcon icon={["fal", "coffee"]} /> */}
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
