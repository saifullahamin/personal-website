import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Fade from "react-reveal/Fade";
import html from "../images/html.svg";
import css from "../images/css.svg";
import javascript from "../images/javascript.svg";
import react from "../images/react.svg";
import materialui from "../images/materialui.svg";
import bootstrap from "../images/bootstrap.svg";
import yarn from "../images/yarn.svg";
import npm from "../images/npm.svg";
import python from "../images/python.png";
import mysql from "../images/mysql.svg";
import java from "../images/java.svg";
import git from "../images/git.svg";
import github from "../images/github.svg";
import linux from "../images/linux.svg";
import vscode from "../images/vscode.png";
import wordpress from "../images/wordpress.svg";
import Zoom from "react-reveal/Zoom";

import "@lottiefiles/lottie-player";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Quicksand, sans-serif",
    flexGrow: 1,
    marginTop: 230,
    [theme.breakpoints.down("md")]: {
      marginTop: 200,
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: 100,
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: 70,
    },
  },
  frontend: {
    width: 600,
    height: 600,
    margin: "auto",

    [theme.breakpoints.down("sm")]: {
      width: 430,
      height: 430,
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
  services: {
    fontSize: 50,
    fontWeight: 500,
    color: "#242424",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      fontSize: 40,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 22,
    },
  },
  servicesDesc: {
    fontSize: 26,
    fontWeight: 500,
    color: "#242424",
    textAlign: "center",
    marginBottom: 120,
    [theme.breakpoints.down("md")]: {
      fontSize: 23,
      marginBottom: 70,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 15,
    },
    "@media (max-width:300px)": {
      fontSize: 13,
    },
  },
  skill1: {
    fontSize: 40,
    fontWeight: 500,
    color: "#242424",
    // textAlign: "center",
    marginBottom: 50,
    width: "fit-content",

    [theme.breakpoints.down("md")]: {
      margin: "auto",
      marginBottom: 50,
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: 30,
      fontSize: 22,
    },
  },
  skillDetail: {
    width: 615,
    fontSize: 20,
    fontWeight: 400,
    color: "#242424",
    [theme.breakpoints.down("md")]: {
      margin: "auto",
      width: "60%",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 18,
      width: "70%",
      margin: "auto",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 15,
      width: "80%",
    },
    "@media (max-width:300px)": {
      fontSize: 12,
    },
  },
  skillImagesDiv: {
    marginBottom: 50,
    [theme.breakpoints.down("xs")]: {
      marginBottom: 20,
    },
  },
  skillImage: {
    height: 50,
    width: 50,
    marginRight: 20,
    transition: "0.5s ease-out",
    "&:hover": {
      transform: "scale(1.07)",
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: 15,
      height: 40,
      width: 40,
    },
    [theme.breakpoints.down("xs")]: {
      marginRight: 7,
      height: 30,
      width: 30,
    },
    "@media (max-width:350px)": {
      marginRight: 7,
      height: 25,
      width: 25,
    },
  },
  detailGrid: {
    display: "flex",
    alignItems: "center",
  },
  detailDiv: {
    width: "100%",
    paddingBottom: 100,
    [theme.breakpoints.down("md")]: {
      margin: "auto",
      marginTop: 50,
      textAlign: "center",
      paddingBottom: 0,
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: 10,
    },
  },
  overflow: {
    overflow: "hidden",
  },
  languages: {
    fontSize: 50,
    fontWeight: 500,
    color: "#242424",
    textAlign: "center",
    marginTop: 170,
    [theme.breakpoints.down("md")]: {
      fontSize: 40,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 40,
      marginTop: 140,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 22,
      marginTop: 100,
    },
  },
  languagesDesc: {
    marginTop: 10,
    width: "80%",
    margin: "auto",
    fontSize: 25,
    fontWeight: 500,
    color: "#242424",
    textAlign: "center",
    marginBottom: 120,
    [theme.breakpoints.down("md")]: {
      fontSize: 23,
      marginBottom: 70,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
      marginBottom: 40,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 15,
      width: "85%",
    },
    "@media (max-width:300px)": {
      fontSize: 13,
    },
  },
  toolImagesDiv: {
    margin: "auto",
    width: "fit-content",
    // [theme.breakpoints.down("xs")]: {
    //   // marginBottom: 20,
    // },
  },
  toolImagesDivAdvanced: {
    marginBottom: 50,
    margin: "auto",
    width: "fit-content",
    [theme.breakpoints.down("sm")]: {
      marginBottom: 20,
    },
  },
  toolImage: {
    marginTop: 30,
    height: 100,
    width: 100,
    marginRight: 20,
    [theme.breakpoints.down("md")]: {
      marginRight: 15,
      height: 70,
      width: 70,
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: 30,
      marginRight: 15,
      height: 55,
      width: 55,
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: 18,
      marginRight: 7,
      height: 40,
      width: 40,
    },
    "@media (max-width:350px)": {
      marginTop: 18,
      marginRight: 4,
      height: 30,
      width: 30,
    },
  },
  level: {
    marginBottom: 20,
    fontSize: 40,
    fontWeight: 500,
    color: "#242424",
    margin: "auto",
    width: "fit-content",
    [theme.breakpoints.down("md")]: {
      marginBottom: 20,
      fontSize: 30,
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: 10,
      fontSize: 22,
      fontWeight: 400,
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: 8,
    },
    "@media (max-width:350px)": {
      marginBottom: 6,
    }
  },
  levelGrid: {},
  toolsGrid: {},
  titleChild: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  title: {
    opacity: 0,
    position: "absolute",
    fontWeight: 600,
    // zIndex: 1,
    width: 100,
    textAlign: "center",
    transition: "0.5s ease-out",

    [theme.breakpoints.down("md")]: {
      width: 70,
      fontSize: 16,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 13,
      width: 55,
      transition: "0.1s ease-out",
    },
    [theme.breakpoints.down("xs")]: {
      width: 40,
      fontSize: 9,
    },
    "@media (max-width:350px)": {
      width: 30,
      fontSize: 8,
    },
  },
  titleDiv: {
    display: "inline-block",
    "&:hover": {
      "& $title": {
        opacity: 1,
      },
    },
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fade bottom distance={"15px"} duration={2000}>
        <div className={classes.services}>Services I Provide</div>
        <div className={classes.servicesDesc}>
          I’m open to remote work opportunities.
        </div>
      </Fade>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <div className={classes.overflow}>
            <Fade left delay={200}>
              <div className={classes.frontend}>
                <lottie-player
                  src="https://assets7.lottiefiles.com/packages/lf20_1LhsaB.json"
                  background="transparent"
                  speed="1"
                  autoplay
                ></lottie-player>
              </div>
            </Fade>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={6}
          className={classes.detailGrid}
        >
          <div className={classes.detailDiv}>
            <div className={classes.overflow}>
              <Fade right delay={200}>
                <div className={classes.skill1}>Frontend Development</div>
              </Fade>
            </div>
            <div className={classes.overflow}>
              <Fade right duration={2000}>
                <div className={classes.skillImagesDiv}>
                  <img
                    src={html}
                    alt="html"
                    className={classes.skillImage}
                    title="HTML"
                  />
                  <img
                    src={css}
                    alt="css"
                    title="CSS"
                    className={classes.skillImage}
                  />
                  <img
                    src={javascript}
                    alt="javascript"
                    className={classes.skillImage}
                    title="JavaScript"
                  />
                  <img
                    src={react}
                    alt="react"
                    title="React"
                    className={classes.skillImage}
                  />
                  <img
                    src={materialui}
                    alt="materialui"
                    className={classes.skillImage}
                    title="Material UI"
                  />
                  <img
                    src={bootstrap}
                    alt="bootstrap"
                    className={classes.skillImage}
                    title="Bootstrap"
                  />
                  <img
                    src={npm}
                    alt="npm"
                    title="npm"
                    className={classes.skillImage}
                  />
                  <img
                    src={yarn}
                    title="yarn"
                    alt="yarn"
                    className={classes.skillImage}
                    style={{ marginRight: "0px" }}
                  />
                </div>
              </Fade>
            </div>
            <div className={classes.overflow}>
              <Fade right duration={2000} delay={340}>
                <div className={classes.skillDetail}>
                  I will build mobile responsive single-page and multi-page
                  rendering websites with tiny animations and an attractive and
                  user-friendly interface using HTML, CSS, JavaScript, React,
                  Material UI, & Bootstrap.
                </div>
              </Fade>
            </div>
          </div>
        </Grid>
      </Grid>
      <Fade bottom distance={"15px"} duration={2000}>
        <div className={classes.languages}>Tools & Technologies</div>
        <div className={classes.languagesDesc}>
          I have worked with the following programming languages, tools, &
          technologies
        </div>
      </Fade>
      <Grid container spacing={0} className={classes.toolsGrid}>
        <Grid item xs={12} lg={12} className={classes.levelGrid}>
          <Fade bottom distance={"15px"} duration={1000}>
            <div className={classes.level}>Advanced in</div>
          </Fade>
        </Grid>

        <Grid item xs={12} lg={12}>
          <div className={classes.toolImagesDivAdvanced}>
            <Zoom bottom>
              <div className={classes.titleDiv}>
                <span className={classes.title}>HTML</span>
                <img src={html} alt="html" className={classes.toolImage} />
              </div>
            </Zoom>
            <Zoom bottom>
              <div className={classes.titleDiv}>
                <span className={classes.title}>CSS</span>
                <img src={css} alt="css" className={classes.toolImage} />
              </div>
            </Zoom>
            <Zoom bottom>
              <div className={classes.titleDiv}>
                <span className={classes.title}>JavaScript</span>
                <img
                  src={javascript}
                  alt="javascript"
                  className={classes.toolImage}
                />
              </div>
            </Zoom>
            <Zoom bottom>
              <div className={classes.titleDiv}>
                <span className={classes.title}>React</span>
                <img src={react} alt="react" className={classes.toolImage} />
              </div>
            </Zoom>
            <Zoom bottom>
              <div className={classes.titleDiv}>
                <span className={classes.title}>Material UI</span>
                <img
                  src={materialui}
                  alt="materialui"
                  className={classes.toolImage}
                />
              </div>
            </Zoom>
            <Zoom bottom>
              <div className={classes.titleDiv}>
                <span className={classes.title}>Python</span>
                <img src={python} alt="python" className={classes.toolImage} />
              </div>
            </Zoom>
            <Zoom bottom>
              <div className={classes.titleDiv}>
                <span className={classes.title}>VS Code</span>
                <img
                  src={vscode}
                  alt="vscode"
                  className={classes.toolImage}
                  style={{ marginRight: "0px" }}
                />
              </div>
            </Zoom>
          </div>
        </Grid>

        <Grid item xs={12} lg={12} className={classes.levelGrid}>
          <Fade bottom distance={"15px"} duration={1000}>
            <div className={classes.level}>Proficient in</div>
          </Fade>
        </Grid>

        <Grid item xs={12} lg={12}>
          <div className={classes.toolImagesDiv}>
            <Zoom bottom>
              <div className={classes.titleDiv}>
                <span className={classes.title}>Java</span>
                <img src={java} alt="java" className={classes.toolImage} />
              </div>
            </Zoom>
            <Zoom bottom>
              <div className={classes.titleDiv}>
                <span className={classes.title}>Bootstrap</span>
                <img
                  src={bootstrap}
                  alt="bootstrap"
                  className={classes.toolImage}
                />
              </div>
            </Zoom>
            <Zoom bottom>
              <div className={classes.titleDiv}>
                <span className={classes.title}>Git</span>
                <img src={git} alt="git" className={classes.toolImage} />
              </div>
            </Zoom>
            <Zoom bottom>
              <div className={classes.titleDiv}>
                <span className={classes.title}>Github</span>
                <img src={github} alt="github" className={classes.toolImage} />
              </div>
            </Zoom>
            <Zoom bottom>
              <div className={classes.titleDiv}>
                <span className={classes.title}>MySQL</span>
                <img src={mysql} alt="mysql" className={classes.toolImage} />
              </div>
            </Zoom>
            <Zoom bottom>
              <div className={classes.titleDiv}>
                <span className={classes.title}>Linux</span>
                <img src={linux} alt="linux" className={classes.toolImage} />
              </div>
            </Zoom>
            <Zoom bottom>
              <div className={classes.titleDiv}>
                <span className={classes.title}>Wordpress</span>
                <img
                  src={wordpress}
                  alt="wordpress"
                  className={classes.toolImage}
                  style={{ marginRight: "0px" }}
                />
              </div>
            </Zoom>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
