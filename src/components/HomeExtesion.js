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
import DevIcon from "devicon-react-svg";

// import "@lottiefiles/lottie-player";

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
    display: "inline-block",
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
    },
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
  const htmlStyle = {
    fill: "thistle",
    width: "150px",
  };

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
                  <div className={classes.skillImage}>
                    <svg viewBox="0 0 128 128">
                      <path
                        fill="#E44D26"
                        d="M19.037 113.876l-10.005-112.215h109.936l-10.016 112.198-45.019 12.48z"
                      ></path>
                      <path
                        fill="#F16529"
                        d="M64 116.8l36.378-10.086 8.559-95.878h-44.937z"
                      ></path>
                      <path
                        fill="#EBEBEB"
                        d="M64 52.455h-18.212l-1.258-14.094h19.47v-13.762h-34.511l.33 3.692 3.382 37.927h30.799zM64 88.198l-.061.017-15.327-4.14-.979-10.975h-13.817l1.928 21.609 28.193 7.826.063-.017z"
                      ></path>
                      <path
                        fill="#fff"
                        d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zM63.952 24.599v13.762h33.244l.276-3.092.628-6.978.329-3.692z"
                      ></path>
                    </svg>
                  </div>

                  <div className={classes.skillImage}>
                    <svg viewBox="0 0 128 128">
                      <path
                        fill="#1572B6"
                        d="M18.814 114.123l-10.054-112.771h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"
                      ></path>
                      <path
                        fill="#33A9DC"
                        d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"
                      ></path>
                      <path
                        fill="#fff"
                        d="M64.001 51.429h18.302l1.264-14.163h-19.566v-13.831h34.681999999999995l-.332 3.711-3.4 38.114h-30.95v-13.831z"
                      ></path>
                      <path
                        fill="#EBEBEB"
                        d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031h-13.882l1.937 21.717 28.331 7.863.063-.018v-14.39z"
                      ></path>
                      <path
                        fill="#fff"
                        d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881h-13.876z"
                      ></path>
                      <path
                        fill="#EBEBEB"
                        d="M64.048 23.435v13.831000000000001h-33.407999999999994l-.277-3.108-.63-7.012-.331-3.711h34.646zM64.001 51.431v13.831000000000001h-15.209l-.277-3.108-.631-7.012-.33-3.711h16.447z"
                      ></path>
                    </svg>
                  </div>

                  <div className={classes.skillImage}>
                    <svg viewBox="0 0 128 128">
                      <path
                        fill="#F0DB4F"
                        d="M2 1v125h125v-125h-125zm66.119 106.513c-1.845 3.749-5.367 6.212-9.448 7.401-6.271 1.44-12.269.619-16.731-2.059-2.986-1.832-5.318-4.652-6.901-7.901l9.52-5.83c.083.035.333.487.667 1.071 1.214 2.034 2.261 3.474 4.319 4.485 2.022.69 6.461 1.131 8.175-2.427 1.047-1.81.714-7.628.714-14.065-.001-10.115.046-20.188.046-30.188h11.709c0 11 .06 21.418 0 32.152.025 6.58.596 12.446-2.07 17.361zm48.574-3.308c-4.07 13.922-26.762 14.374-35.83 5.176-1.916-2.165-3.117-3.296-4.26-5.795 4.819-2.772 4.819-2.772 9.508-5.485 2.547 3.915 4.902 6.068 9.139 6.949 5.748.702 11.531-1.273 10.234-7.378-1.333-4.986-11.77-6.199-18.873-11.531-7.211-4.843-8.901-16.611-2.975-23.335 1.975-2.487 5.343-4.343 8.877-5.235l3.688-.477c7.081-.143 11.507 1.727 14.756 5.355.904.916 1.642 1.904 3.022 4.045-3.772 2.404-3.76 2.381-9.163 5.879-1.154-2.486-3.069-4.046-5.093-4.724-3.142-.952-7.104.083-7.926 3.403-.285 1.023-.226 1.975.227 3.665 1.273 2.903 5.545 4.165 9.377 5.926 11.031 4.474 14.756 9.271 15.672 14.981.882 4.916-.213 8.105-.38 8.581z"
                      ></path>
                    </svg>
                  </div>

                  <div className={classes.skillImage}>
                    <svg viewBox="0 0 128 128">
                      <g fill="#61DAFB">
                        <circle cx="64" cy="64" r="11.4"></circle>
                        <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3-12.5 4.8-19.3 11.4-19.3 18.8s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zm-14.8-30.5c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zm-11.2 59.3c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zm-25.6 27.1c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zm25.6-27.1c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zm-54.5-16.2c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zm-24.7 29c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5-13.8-4-22.1-10-22.1-15.6zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zm60.8-20.3c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
                      </g>
                    </svg>
                  </div>

                  <div className={classes.skillImage}>
                    <svg viewBox="0 0 128 128">
                      <path
                        fill="#1FA6CA"
                        d="M0.2,68.6V13.4L48,41v18.4L16.1,41v36.8L0.2,68.6z"
                      ></path>
                      <path
                        fill="#1C7FB6"
                        d="M48,41l47.9-27.6v55.3L64,87l-16-9.2L80,59.4V41L48,59.4V41z"
                      ></path>
                      <path
                        fill="#1FA6CA"
                        d="M48,77.8v18.4L80,114.6V96.2L48,77.8z"
                      ></path>
                      <path
                        fill="#1C7FB6"
                        d="M80,114.6L127.8,87V50.2l-16,9.2v18.4L80,96.2V114.6z M111.9,41V22.6l16-9.2v18.4L111.9,41z"
                      ></path>
                    </svg>
                  </div>

                  <div className={classes.skillImage}>
                    <svg viewBox="0 0 128 128">
                      <path
                        fill="#5B4282"
                        d="M75.701 65.603c-2.334-.768-5.694-.603-10.08-.603h-17.621v23h18.844c2.944 0 5.012-.315 6.203-.535 2.099-.376 3.854-1.104 5.264-1.982 1.409-.876 2.568-2.205 3.478-3.881.908-1.676 1.363-3.637 1.363-5.83 0-2.568-.658-4.54-1.975-6.436-1.316-1.896-3.141-2.965-5.476-3.733zM73.282 55.087c2.317-.688 4.064-1.89 5.239-3.487 1.176-1.598 1.763-3.631 1.763-6.044 0-2.286-.549-4.314-1.646-6.054s-2.662-2.413-4.699-3.056c-2.037-.641-5.53-.446-10.48-.446h-15.459v20h16.587c4.042 0 6.939-.38 8.695-.913zM126 18.625c0-9.182-7.443-16.625-16.625-16.625h-91.75c-9.182 0-16.625 7.443-16.625 16.625v91.75c0 9.182 7.443 16.625 16.625 16.625h91.75c9.182 0 16.625-7.443 16.625-16.625v-91.75zm-35.447 66.12c-1.362 2.773-3.047 4.911-5.052 6.415-2.006 1.504-4.521 2.78-7.544 3.548-3.022.769-6.728 1.292-11.113 1.292h-27.844v-69h27.42c5.264 0 9.485.609 12.665 2.002 3.181 1.395 5.671 3.497 7.474 6.395 1.801 2.898 2.702 5.907 2.702 9.071 0 2.945-.8 5.708-2.397 8.308-1.598 2.602-4.011 4.694-7.237 6.292 4.166 1.222 7.37 3.304 9.61 6.248 2.24 2.945 3.36 6.422 3.36 10.432 0 3.227-.681 6.225-2.044 8.997z"
                      ></path>
                    </svg>
                  </div>

                  <div className={classes.skillImage}>
                    <svg viewBox="0 0 128 128">
                      <g id="original">
                        <path
                          fill="#2c8ebb"
                          d="M99.24,80.71C94.9,80.76,91.1,83,87.89,85c-6,3.71-9,3.47-9,3.47l-.1-.17c-.41-.67,1.92-6.68-.69-13.84-2.82-7.83-7.3-9.72-6.94-10.32,1.53-2.59,5.36-6.7,6.89-14.36.91-4.64.67-12.28-1.39-16.28-.38-.74-3.78,1.24-3.78,1.24s-3.18-7.09-4.07-7.66c-2.87-1.84-6,7.61-6,7.61a14,14,0,0,0-11.71,4.5,9.64,9.64,0,0,1-3.85,2.27c-.41.14-.91.12-2.15,3.47C43.2,50,48.34,55.74,48.34,55.74s-6.13,4.33-8.4,9.72a24.78,24.78,0,0,0-1.75,11.68s-4.36,3.78-4.64,7.68a12.87,12.87,0,0,0,1.77,7.83,1.94,1.94,0,0,0,2.63.91s-2.9,3.38-.19,4.81c2.47,1.29,6.63,2,8.83-.19,1.6-1.6,1.92-5.17,2.51-6.63.14-.34.62.57,1.08,1a10,10,0,0,0,1.36,1s-3.9,1.68-2.3,5.51c.53,1.27,2.42,2.08,5.51,2.06,1.15,0,13.76-.72,17.12-1.53a4.33,4.33,0,0,0,2.61-1.46,63,63,0,0,0,15.49-7c4.74-3.09,6.68-3.93,10.51-4.84C103.64,85.54,103.43,80.64,99.24,80.71Z"
                        ></path>
                        <path
                          fill="#2c8ebb"
                          d="M64,2a62,62,0,1,0,62,62A62,62,0,0,0,64,2Zm37.3,87.83c-3.35.81-4.91,1.44-9.41,4.36a67,67,0,0,1-15.56,7.18,8.71,8.71,0,0,1-3.64,1.77c-3.81.93-16.88,1.63-17.91,1.63h-.24c-4,0-6.27-1.24-7.49-2.54-3.4,1.7-7.8,1-11-.69a5.55,5.55,0,0,1-3-3.9,6,6,0,0,1,0-2.06,6.66,6.66,0,0,1-.79-1A16.38,16.38,0,0,1,30,84.52c.29-3.73,2.87-7.06,4.55-8.83A28.56,28.56,0,0,1,36.61,64a26.82,26.82,0,0,1,6.82-9c-1.65-2.78-3.33-7.06-1.7-11.42,1.17-3.11,2.13-4.84,4.24-5.58h0a6.84,6.84,0,0,0,2.51-1.34A17.65,17.65,0,0,1,60.34,31c.19-.48.41-1,.65-1.46,1.6-3.4,3.3-5.31,5.29-6a4.88,4.88,0,0,1,4.4.5c.65.43,1.48,1,3.9,6a4.69,4.69,0,0,1,2.85-.1,3.81,3.81,0,0,1,2.39,1.94c2.47,4.74,2.8,13.19,1.72,18.62a33.8,33.8,0,0,1-5.84,13.31,25.73,25.73,0,0,1,5.77,9.43,25.42,25.42,0,0,1,1.41,10.41A28.7,28.7,0,0,0,86,81.91c3.06-1.89,7.68-4.74,13.19-4.81a6.62,6.62,0,0,1,7,5.7A6.35,6.35,0,0,1,101.3,89.83Z"
                        ></path>
                      </g>
                    </svg>
                  </div>

                  <div
                    className={classes.skillImage}
                    style={{ marginRight: "0px" }}
                  >
                    <svg viewBox="0 0 128 128">
                      <path
                        id="original-wordmark"
                        fill="#cb3837"
                        d="M2,38.5H126V82.21H64V89.5H36.44V82.21H2ZM8.89,74.93H22.67V53.07h6.89V74.93h6.89V45.79H8.89ZM43.33,45.79V82.21H57.11V74.93H70.89V45.79Zm13.78,7.29H64V67.64H57.11Zm20.67-7.29V74.93H91.56V53.07h6.89V74.93h6.89V53.07h6.89V74.93h6.89V45.79Z"
                      ></path>
                    </svg>
                  </div>
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
