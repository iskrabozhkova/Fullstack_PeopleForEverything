import React from 'react'
import "./BackgroundImage.css"
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import Registration from "../Registration/Registration"

export default function BackgroundImage() {
  return (
    <div className='bg-image'>
    <h1 id="header">People for everything</h1>
    <Button style={{
      borderRadius: 35,
      backgroundColor: "#21b6ae",
      marginLeft: "500px",
      width: "10%",
      padding: "18px 36px",
      fontSize: "18px"
  }} variant="contained"  href="/registration">
    Register
  </Button>
  <Button 
  style={{
    borderRadius: 35,
    backgroundColor: "#21b6ae",
    padding: "18px 36px",
    width: "10%",
    margin: "60px",
    fontSize: "18px"
}}
variant="contained" href="/login">
  Login
</Button>
    </div>
  )
}
