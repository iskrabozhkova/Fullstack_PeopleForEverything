import React, {useState, useEffect, createContext} from 'react'
import { useParams } from "react-router-dom";
import PropTypes from 'prop-types'
import axios from "axios"
import BasicModal from '../Advertisements/BasicModal';
import ButtonAppBarUser from '../Menu/AppBarUser';
import {
    Paper, Grid, Avatar, Button, Container, TextField
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
                value={info}
                onChange={e => setInfo(e.target.value)}
            ></TextField>
            <Button 
                fullWidth 
                disabled={!info} 
                variant="contained" 
                color="primary" 
                sx={{marginTop: 2}}
                onClick={updateInfo}>
                Add info
            </Button>
        </Container>
          </Grid>
        </Grid>
        </Paper>
    </div>
  )
}

UserProfile.propTypes = {}

export default UserProfile