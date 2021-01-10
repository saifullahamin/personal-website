import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect } from "react";
import "./NavBar.css";

const useStyles = makeStyles((theme) => ({
  root: {},
  header: {
    backgroundColor: "rgb(250, 250, 250)",
    position: "static",
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },
  logo: {},
  IconButtonlogo: {
    color: "#363636",
    fontFamily: "Sacramento, cursive",
    fontStyle: "italic",
    fontSize: 34,
    padding: 10,
    paddingBottom: 4,
    [theme.breakpoints.down("md")]: {
      fontSize: 30,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 27,
      paddingLeft: 4,
    },
    "@media (max-width:300px)": {
      fontSize: 24,
    },
  },
  menuButton: {
    minWidth: 0,
    color: "#363636",
    fontWeight: 500,
    fontSize: 17.5,
    fontFamily: "Quicksand, sans-serif",
    margin: 18,
    textTransform: "none",
    padding: 0,
    [theme.breakpoints.down("md")]: {
      margin: 9,
      fontSize: 16,
    },
    "&:hover": {
      background: "none",
    },
  },
  mobileMenuItem: {
    borderRadius: 5,
    fontSize: 16,
    padding: 3,
    paddingLeft: 6,
    paddingRight: 6,
    width: "fit-content",
    minHeight: 0,
    fontFamily: "Quicksand, sans-serif",
    fontWeight: 500,
    margin: "auto",
    [theme.breakpoints.down("xs")]: {
      fontSize: 15,
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    width: "90%",
    margin: "auto",
  },
  drawerContainer: {
    marginTop: 40,
  },
  drawer: {
    textAlign: "center",
  },
  drawerDiv: {
    borderBottom: "0.3px solid #DEDADA",
    borderTop: "0.3px solid #DEDADA",
    // background: "black",
    marginBottom: 30,
    padding: 8,
    [theme.breakpoints.down("xs")]: {
      marginBottom: 25,
      padding: 3,
    },
    "&:hover": {
      cursor: "pointer",
      background: "rgb(240,240,240)",
    },
  },
  mobileToolbar: {
    display: "flex",
    justifyContent: "space-between",
  },

  name: {
    borderBottom: "0.7px solid #363636",
    display: "inline-block",
    lineHeight: 0.85,
    color: "#363636",
    textShadow:
      " 2px 2px rgb(250,250,250), 2px -2px rgb(250,250,250), -2px 2px rgb(250,250,250), -2px -2px rgb(250,250,250)",
  },
  link: {
    fontFamily: "Quicksand, sans-serif",
    color: "#363636",
    fontSize: 10,
  },
  paper: {
    backgroundColor: "rgb(250, 250, 250)",
    width: "50%",
  },
  menuIcon: {
    padding: 0,
    "&:after": {
      background: "none",
    },
    "&:hover": {
      background: "none",
    },
  },
}));

export default function Header() {
  const classes = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={classes.toolbar}>
        <Typography className={classes.IconButtonlogo}>
          {"<"} <span className={classes.name}>Saifullah Amin</span> {"/>"}
        </Typography>
        <div>
          <Button
            // key={label}
            className={classes.menuButton}
            disableRipple={true}
          >
            Home
          </Button>
          <Button
            // key={label}
            className={classes.menuButton}
            disableRipple={true}
          >
            Education
          </Button>
          <Button
            // key={label}
            className={classes.menuButton}
            disableRipple={true}
          >
            Experience
          </Button>
          <Button
            // key={label}
            className={classes.menuButton}
            disableRipple={true}
          >
            Projects
          </Button>
          <Button
            // key={label}
            className={classes.menuButton}
            disableRipple={true}
          >
            Contact Me
          </Button>
        </div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar className={classes.mobileToolbar}>
        <div>
          <Typography
            variant="h6"
            component="h1"
            className={classes.IconButtonlogo}
          >
            {"<"} <span className={classes.name}>Saifullah Amin</span> {"/>"}
          </Typography>
        </div>
        <IconButton
          edge="start"
          aria-label="menu"
          aria-haspopup="true"
          onClick={handleDrawerOpen}
          className={classes.menuIcon}
          // disableRipple={true}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={handleDrawerClose}
          className={classes.drawer}
          classes={{ paper: classes.paper }}
        >
          <div className={classes.drawerContainer}>
            <Link
              style={{ textDecoration: "none" }}
              // key={label}
              className={classes.link}
            >
              <div className={classes.drawerDiv}>
                <MenuItem
                  disableRipple={true}
                  className={classes.mobileMenuItem}
                  style={{ background: "none" }}
                >
                  Home
                </MenuItem>
              </div>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              // key={label}
              className={classes.link}
            >
              <div className={classes.drawerDiv}>
                <MenuItem
                  disableRipple={true}
                  className={classes.mobileMenuItem}
                  style={{ background: "none" }}
                >
                  Education
                </MenuItem>
              </div>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              // key={label}
              className={classes.link}
            >
              <div className={classes.drawerDiv}>
                <MenuItem
                  disableRipple={true}
                  className={classes.mobileMenuItem}
                  style={{ background: "none" }}
                >
                  Experience
                </MenuItem>
              </div>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              // key={label}
              className={classes.link}
            >
              <div className={classes.drawerDiv}>
                <MenuItem
                  disableRipple={true}
                  className={classes.mobileMenuItem}
                  style={{ background: "none" }}
                >
                  Projects
                </MenuItem>
              </div>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              // key={label}
              className={classes.link}
            >
              <div className={classes.drawerDiv}>
                <MenuItem
                  disableRipple={true}
                  className={classes.mobileMenuItem}
                  style={{ background: "none" }}
                >
                  Contact Me
                </MenuItem>
              </div>
            </Link>
          </div>
        </Drawer>
      </Toolbar>
    );
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </div>
  );
}
