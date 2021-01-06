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
// import { Link as RouterLink } from "react";

const headersData = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Education",
    href: "/education",
  },
  {
    label: "Experience",
    href: "/experience",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Contact Me",
    href: "/contact",
  },
];

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "white",
    // paddingRight: "79px",
    // paddingLeft: "118px",
    // "@media (max-width: 900px)": {
    //   paddingLeft: 0,
    // },
  },
  //   logo: {
  //     fontFamily: "Work Sans, sans-serif",
  //     fontWeight: 600,
  //     color: "black",
  //     // textAlign: "left",
  //   },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    // marginLeft: "38px",
    // justifyContent: "flex-end",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  drawerContainer: {
    // padding: "20px 30px",
    // background: "blue",
    // // maxWidth: "100%",
    // justifyContent: "center",
    // margin: "auto",
  },
  drawer: {
    // width: "100px",
    // width: "drawerWidth",
    // background: "red",
    // display: "flex",
    // justifyContent: "center",
  },
  mobileToolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  IconButtonlogo: {
    color: "black",
  },
  link: {
    // width: "300px",
  },
  paper: {
    // width: "100%",
    // height: "min-content",
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
        {nameLogo}
        <div>{getMenuButtons()}</div>
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
        <div>{nameLogo}</div>
        <IconButton
          edge="start"
          color="black"
          aria-label="menu"
          aria-haspopup="true"
          onClick={handleDrawerOpen}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={handleDrawerClose}
          className={classes.drawer}
          // flexDirection="none"
          classes={{ paper: classes.paper }}
        >
          <div className={classes.drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link
          // component: RouterLink,
          // to: href,
          color="black"
          style={{ textDecoration: "none" }}
          key={label}
          className={classes.link}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      );
    });
  };

  const nameLogo = (
    <Typography variant="h6" component="h1" className={classes.IconButtonlogo}>
      {"<"}Saifullah Amin{"/>"}
    </Typography>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          key={label}
          color="black"
          // to: href,
          // component: RouterLink,
          className={classes.menuButton}
        >
          {label}
        </Button>
      );
    });
  };

  return (
    <header>
      <AppBar className={classes.header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}
