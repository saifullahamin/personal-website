/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/jsx-pascal-case */
// import React, { useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import myimage from "../images/saif.png";
import flag from "../images/pakistan.png";
// import useWebAnimations from "@wellyshen/use-web-animations";
import Typist from "react-typist";
import TypistLoop from "react-typist-loop";
import "../../node_modules/react-typist/dist/Typist.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faFacebookF,
  faFacebookMessenger,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Button from "@material-ui/core/Button";
import Fade from "react-reveal/Fade";
// import { Fade } from "react-awesome-reveal";
// import Reveal from "react-reveal";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 110,
    fontFamily: "Quicksand, sans-serif",
    color: "#363636",
    [theme.breakpoints.down("sm")]: {
      marginTop: 60,
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: 40,
    },
  },
  myimage: {
    width: "100%",
  },
  myImageDiv: {
    width: 550,
    height: 550,
    margin: "auto",
    [theme.breakpoints.down("md")]: {
      width: 400,
      height: 400,
    },
    [theme.breakpoints.down("sm")]: {
      width: 400,
      height: 400,
    },
    [theme.breakpoints.down("xs")]: {
      width: 300,
      height: 300,
    },
    "@media (max-width:300px)": {
      width: 250,
      height: 250,
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
  textGrid: {
    // display: "relative",
    display: "flex",
    alignContent: "center",
    alignItems: "center",
  },
  text: {
    width: "fit-content",
    margin: "auto",
    paddingBottom: 50,
    // [theme.breakpoints.down("md")]: {
    //   paddingTop: 60,
    //   //   width: "90%",
    // },
    [theme.breakpoints.down("md")]: {
      paddingBottom: 0,
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
      fontSize: 20,
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
    fontSize: 28,
    marginTop: 30,
    [theme.breakpoints.down("md")]: {
      fontSize: 22,
      marginTop: 20,
    },
    [theme.breakpoints.down("sm")]: {
      display: "block",
      marginTop: 20,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
      marginTop: 8,
    },
  },
  typistLoop: {
    marginLeft: 7,
  },
  socialMedia: {
    marginTop: 30,
    [theme.breakpoints.down("md")]: {
      marginTop: 22,
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: 20,
    },
  },
  iconSpan: {
    marginRight: 7,
    color: "white",
    borderRadius: "2.6rem",
    fontSize: 22,
    transition: "0.5s ease-out",
    "&:hover": {
      cursor: "pointer",
      opacity: 0.6,
    },
    [theme.breakpoints.down("md")]: {
      marginRight: 5,
      fontSize: 17,
    },
    [theme.breakpoints.down("sm")]: {
      // "&:hover": {
      //   cursor: "pointer",
      //   opacity: 1,
      // },
    },
  },
  whatsapp: {
    padding: "7px 11.5px",
    backgroundColor: "#6EE777",
    [theme.breakpoints.down("md")]: {
      padding: "5px 8px",
    },
  },
  messenger: {
    padding: "7px 10.5px",
    background:
      "linear-gradient(84.06deg, #0088FF -28.62%, #A033FF 36.39%, #FF5C87 98.74%)",
    [theme.breakpoints.down("md")]: {
      padding: "5px 7.3px",
    },
  },
  facebook: {
    padding: "7px 14.5px",
    backgroundColor: "#1877F2",
    [theme.breakpoints.down("md")]: {
      padding: "5px 10px",
    },
  },
  email: {
    padding: "7px 10.5px",
    backgroundColor: "#D93D26",
    [theme.breakpoints.down("md")]: {
      padding: "5px 7.3px",
    },
  },
  linkedin: {
    padding: "7px 11px",
    backgroundColor: "#0077B5",
    [theme.breakpoints.down("md")]: {
      padding: "5px 8px",
    },
  },
  github: {
    padding: "7px 10.5px",
    backgroundColor: "#181717",
    [theme.breakpoints.down("md")]: {
      padding: "5px 7.3px",
    },
  },
  resume: {
    color: "white",
    marginTop: 30,
    background: "#2F2F2F",
    transition: "0.5s ease-out",
    fontSize: 20,
    fontFamily: "Quicksand, sans-serif",
    fontWeight: 600,
    padding: "4px 16px",
    borderRadius: 6,
    "&:after": {
      background: "none",
    },
    "&:hover": {
      background: "white",
      color: "black",
    },
    textTransform: "none",
    [theme.breakpoints.down("md")]: {
      fontSize: 18,
      padding: "3px 14px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
      padding: "2.5px 12px",
      marginTop: 20,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 15,
      padding: "2px 11px",
      marginTop: 20,
    },
  },
}));

export default function Home() {
  const classes = useStyles();

  // const homeRef = useRef(null);

  // useWebAnimations({
  //   ref: homeRef,
  //   keyframes: [
  //     { opacity: 0 },
  //     { transform: "translateY(100px)" },
  //     { opacity: 1 },
  //     { transform: "translateY(0px)" },
  //   ],
  //   timing: {
  //     duration: 3000,
  //     easing: "ease-in-out",
  //     delay: 0,
  //     iterations: 1,
  //   },
  // });

  return (
    <Fade bottom distance={"15px"} duration={3000}>
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
          <Grid item xs={12} sm={12} md={6} className={classes.textGrid}>
            <div className={classes.text}>
              <div className={classes.greetings}>Hi! its Saifullah Amin</div>
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
                      "Frontend Developer",
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
              <div className={classes.socialMedia}>
                <a href="https://github.com/saifullahamin" target="_blank">
                  <span className={`${classes.iconSpan} ${classes.github}`}>
                    <FontAwesomeIcon icon={faGithub} />
                  </span>
                </a>
                <a
                  href="https://linkedin.com/in/saifullah-amin"
                  target="_blank"
                >
                  <span className={`${classes.iconSpan} ${classes.linkedin}`}>
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </span>
                </a>
                <a href="mailto::saifullahaminkhan@gmail.com" target="_blank">
                  <span className={`${classes.iconSpan} ${classes.email}`}>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                </a>
                <a
                  href="https://facebook.com/saifullahaminkhan"
                  target="_blank"
                >
                  <span className={`${classes.iconSpan} ${classes.facebook}`}>
                    <FontAwesomeIcon icon={faFacebookF} />
                  </span>
                </a>
                <a href="https://m.me/saifullahaminkhan" target="_blank">
                  <span className={`${classes.iconSpan} ${classes.messenger}`}>
                    <FontAwesomeIcon icon={faFacebookMessenger} />
                  </span>
                </a>
                <a
                  href="whatsapp://send?phone=923139740496"
                  target="_blank"
                >
                  <span
                    className={`${classes.iconSpan} ${classes.whatsapp}`}
                    style={{ marginRight: 0 }}
                  >
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </span>
                </a>
              </div>
              <Button className={classes.resume} variant="outlined">
                Resume
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    </Fade>
  );
}
