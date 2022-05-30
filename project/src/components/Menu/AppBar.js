
import React from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Container
} from "@material-ui/core";
import { Home } from "@material-ui/icons";
import { Link } from "react-router-dom";

const usedStyles = makeStyles({
  navbarDisplayFlex: {
    display: "flex",
    justifyContent: "space-between",
  },
  navDisplayFlex: {
    display: "flex",
    justifyContent: "space-between",
 
  },
  linkText: {
    textDecoration: "none",
    textTransform: "uppercase",
    width: "100px",
    color: "white"
  }
});

const navLinks = [
  { title: "Home", path: "/" },
  { title: "Registration", path: "/registration" },
  { title: "Login", path: "/login" },
  { title: "Add Advertisement", path: "/addvertisement/new" },
  { title: "Advertisements", path: "/addvertisements" },
];

const ButtonAppBar = () => {
  const classes = usedStyles();
  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Container maxWidth="lg" className={classes.navbarDisplayFlex}>
            <List
              component="nav"
              aria-labelledby="main navigation"
              className={classes.navDisplayFlex}
            >
              {navLinks.map(({ title, path }) => (
                <ListItem button key={title} component={Link} to={path}>
                  <ListItemText className={classes.linkText} primary={title} />
                </ListItem>
              ))}
            </List>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default ButtonAppBar;