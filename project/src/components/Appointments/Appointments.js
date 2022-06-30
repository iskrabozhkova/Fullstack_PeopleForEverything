import React, {useEffect, useState, useParams} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios';
import ButtonAppBar from '../Menu/AppBar';
import Post from '../Advertisements/Post'
import { Container, TextField, Typography, Button, Grid, Avatar, Divider } from '@mui/material';

function Appointments() {
    const userDetails = JSON.parse(localStorage.getItem('userData'));
    const id = userDetails._id;

    const [appointments, setAppointments] = useState(null);

    useEffect(() => {
        axios({
             method: "GET",
             withCredentials: true,
             url: `http://localhost:8080/api/appointments/${id}`
        }).then(res => {
            const appointmentsArray = res.data.appointments[0];
            appointmentsArray.map(appointment => {
            const userEmail = appointment.email;
            const date = appointment.date;
            const advert = appointment.advert;
            // console.log(userEmail);
            // console.log(date);
            // console.log(advert);
            setAppointments({userEmail, date, advert})
           })
     
        });
        console.log('ppp')
       },[])
        console.log(appointments)
  return (
    <div>
    {(appointments != null) ?
        <div>
        <h1>Appointments</h1>
        <ButtonAppBar/>
        <Container sx={{marginTop: 10}}>
        <Grid  container spacing={1}>
            <Grid container direction='column' sm={4} item={true} sx={{ fontWeight: 'bold' }}>
              User email
            </Grid>
            <Grid container direction='column' sm={4} item={true} sx={{ fontWeight: 'bold' }}>
              Date
            </Grid>
            <Grid container direction='column' sm={2} item={true} sx={{ fontWeight: 'bold' }}>
              Advert
            </Grid>
        </Grid>
        <Divider sx={{margin: 3}}></Divider>
        <Grid  container spacing={1}>
        <Grid container direction='column' sm={4} item={true}>
        <p>{appointments.userEmail}</p>
        </Grid>
        <Grid container direction='column' sm={4} item={true}>
        <p> {appointments.date}</p>
        </Grid>
        <Grid container item sm={4}>
            <Post post={appointments}/>
        </Grid>
        </Grid>
       </Container>
       </div>
    : null
  }
   </div>
  )
}

Appointments.propTypes = {}
export default Appointments
