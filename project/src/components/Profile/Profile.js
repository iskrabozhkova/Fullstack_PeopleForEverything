import React, {useState, useEffect, createContext} from 'react'
import { useParams } from "react-router-dom";
import PropTypes from 'prop-types'
import axios from "axios"
import BasicModal from '../Advertisements/BasicModal';
import ButtonAppBarUser from '../Menu/AppBarUser';
import {
    Paper, Grid, Avatar, Button, Container, TextField, Divider
  } from "@mui/material";


function UserProfile() {
    const userDetails = JSON.parse(localStorage.getItem('userData'));
    const id = userDetails._id;
    const [info, setInfo] = useState([]);

    const updateInfo = () => {
        return axios({
            method: "PUT",
            withCredentials: true,
            url: `http://localhost:8080/api/users/:{id}`
        })
    }
  return (
    <div>
        <ButtonAppBarUser/>
        <h1>My profile</h1>
        <Paper style={{ padding: "40px 20px", margin: "5% auto", border: '4px solid #4F45AC', width: '50%'}}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar alt="Remy Sharp"  src={userDetails.photo}  sx={{ width: 300, height: 300 }}/>
          </Grid>
         
          <Grid justifyContent="left" item xs zeroMinWidth>
            <h4 style={{ margin: '10% 10% 0 10%', textAlign: "left" }}>{userDetails.firstName} {userDetails.lastName}</h4>
            <p style={{ textAlign: "left", marginLeft: '10%'}}>
              Email: {userDetails.email}
            </p>
            <Container>
           
        </Container>
          </Grid>
        </Grid>
        </Paper>
    </div>
  )
}

UserProfile.propTypes = {}

export default UserProfile
