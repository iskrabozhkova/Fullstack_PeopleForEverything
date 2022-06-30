import React, {useState, useEffect, createContext} from 'react'
import { useParams } from "react-router-dom";
import PropTypes from 'prop-types'
import axios from "axios"
import BasicModal from '../Advertisements/BasicModal';
import ButtonAppBar from '../Menu/AppBar';
import {
    Paper, Grid, Avatar, Button, Container, TextField
  } from "@mui/material";

function Profile() {
    const userDetails = JSON.parse(localStorage.getItem('userData'));
    const id = userDetails._id;
    const [skills, setSkills] = useState([]);

    const updateInfo = () => {
       // console.log(skills)
        return axios({
            method: "PUT",
            data: skills,
            withCredentials: true,
            url: `http://localhost:8080/api/users/:${id}`
        }).then(res => console.log(res))
    }
  return (
    <div>
    <ButtonAppBar/>
      <h1>Profile</h1>
      <Paper style={{ padding: "40px 20px", margin: "0 5% 0 20%"  }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar alt="Remy Sharp"  />
          </Grid>
          <Grid justifyContent="left" item xs zeroMinWidth>
            <h4 style={{ margin: 0, textAlign: "left" }}>{userDetails.firstName} {userDetails.lastName}</h4>
            <p style={{ textAlign: "left" }}>
                My email is: {userDetails.email}
            </p>
            <Container>
            <TextField
                fullWidth
                rows={4}
                variant="outlined"
                label="Add info"
                multiline
                value={skills}
                onChange={e => setSkills(skills => [...skills, e.target.value])}
            ></TextField>
            <Button 
                fullWidth 
                disabled={!skills} 
                variant="contained" 
                color="primary" 
                sx={{marginTop: 2}}
                onClick={updateInfo}>
                Add skill
            </Button>
        </Container>
          </Grid>
        </Grid>
        </Paper>
    <h1>{userDetails.firstName}</h1>
    <h1>{userDetails.lastName}</h1>
    <h1>{userDetails.email}</h1>
    </div>
  )
}

Profile.propTypes = {}

export default Profile
