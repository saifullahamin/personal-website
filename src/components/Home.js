import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import myimage from "../images/saif.png";
import flag from "../images/pakistan.png";
import useWebAnimations from "@wellyshen/use-web-animations";

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
    [theme.breakpoints.down("sm")]: {
        paddingTop: 50,
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
    // transform: "rotate(-6deg)",
  },
  skill: {
    // opacity: 0,
  },
}));

export default function Home() {
  const classes = useStyles();
  //   const skill = useRef(null);
  //   let [skillNo, setSkillNo] = useState(1);

  //   const skills = () => {
  //     if (skillNo == 1) {
  //       console.log("Start");
  //       setSkillNo(++skillNo);
  //       console.log("After");
  //       return <div>Software Engineering Student</div>;
  // }
  // } else if (skillNo == 2) {
  //   setSkillNo(3);
  //   return <div className={classes.skill}>React Developer</div>;
  // } else if (skillNo == 3) {
  //   setSkillNo(1);
  //   return <div className={classes.skill}>Cloud Computing Enthusiast</div>;
  // }
  // }
  //   };
  // useWebAnimations({
  //   ref: skill,
  //   keyframes: [
  //     {
  //       opacity: 1,
  //     },
  //     //   { transform: "translateY(-100px)" },
  //     { transform: "translateY(100px)" },
  //     { transform: "translateY(-100px)" },
  //     {
  //       opacity: 0,
  //     },
  //   ],
  //   timing: {
  //     //   delay: 9000,
  //     duration: 2000,
  //     //   iterations: Infinity,
  //     //   easing: "ease-in-out",
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
            <div></div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
