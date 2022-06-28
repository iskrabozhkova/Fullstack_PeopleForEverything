
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
import axios from "axios";


const usedStyles = makeStyles({
  navbarDisplayFlex: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0px",
  },
  navDisplayFlex: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column"
 
  },
  linkText: {
    textDecoration: "none",
    textTransform: "uppercase",
    width: "100px",
    color: "white"
  },
  nav: {
    height: "500px",
    position: "absolute",
    width: "200px",
    height: "100%",
  },
  item: {
    height: "70px",
    
  }
});

const logout = () => {
  return axios({
    method: "GET",
    withCredentials: true,
    url: "http://localhost:8080/api/auth/logout"
}).then(res => {
    console.log('Logout successfully');
    localStorage.removeItem('auth-token');
    window.location.replace("http://localhost:3000/")
  })
}
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
      <AppBar position="static" color="primary" className={classes.nav}>
        <Toolbar>
          <Container maxWidth="lg" className={classes.navbarDisplayFlex}>
            <List
              component="nav"
              aria-labelledby="main navigation"
              className={classes.navDisplayFlex}
            >
              {navLinks.map(({ title, path }) => (
                <ListItem button key={title} component={Link} to={path} className={classes.item} >
                  <ListItemText className={classes.linkText} primary={title} />
                </ListItem>
              ))}
              <ListItem button key="Logout" to="" className={classes.item} onClick={logout}>
              <ListItemText className={classes.linkText} primary="Logout" />
            </ListItem>
            </List>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default ButtonAppBar;