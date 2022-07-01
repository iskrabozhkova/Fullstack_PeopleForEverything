import React from "react";
import "./BackgroundImage.css";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

export default function BackgroundImage() {
  return (
    <div className="bg-image">
      <h1 id="header">People for everything</h1>
      <div className="container-home">
        <h4>You have a problem...we are here to solve it!</h4>
        <h4>How? Read here - <Link href="/about" underline="none">
        {'About'}
      </Link></h4>
        <Button
          style={{
            borderRadius: 35,
            backgroundColor: "#4F45AC",
            marginRight: "0px",
            width: "40%",
            marginRight: "20px",
            padding: "18px 36px",
            fontSize: "18px",
          }}
          variant="contained"
          href="/registration"
        >
          Register
        </Button>
        <Button
          style={{
            borderRadius: 35,
            backgroundColor: "#4F45AC",
            padding: "18px 36px",
            width: "40%",
            fontSize: "18px",
          }}
          variant="contained"
          href="/login"
        >
          Login
        </Button>
      </div>
    </div>
  );
}
