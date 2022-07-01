import React from "react";
import "./About.css";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function About() {
  return (
    <div className="about-section">
      <h1>Hi, there! Welcome to People for everything!</h1>

      <h4>What is the idea behind the app?</h4>
      <p>
        In our busy everyday life, we need someone who can do some work for us
        just with one click. People for everything provides the ability for
        users to find a person for different type of things they need.
      </p>
      <h4>What can I do to use the app?</h4>
      <p>
        First, log in to your account. If you don't have an account, register
        first.
      </p>
      <p>If you login like USER, you can:</p>
      <ul>
        <li>see different kinds of advertisement</li>
        <li>make an appointment of convenient for you date and hour</li>
        <li>add advertisement to favourites</li>
        <li>comment and rate the advertisements</li>
      </ul>
      <p>If you login like FREELANCER, you can:</p>
      <ul>
        <li>add advertisement</li>
        <li>see people who are made appointment for your advertisements</li>
      </ul>
      <Button variant="contained" href="/" sx={{ marginTop: 5 }}>
        Go back
      </Button>
    </div>
  );
}

About.propTypes = {};

export default About;
