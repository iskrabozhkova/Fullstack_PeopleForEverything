import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios';
import ButtonAppBar from '../Menu/AppBar';

function Appointments() {
    const userDetails = JSON.parse(localStorage.getItem('userData'));
    const id = userDetails._id;
    const [appointments, setAppointments] = useState({});
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
            setAppointments({userEmail, date, advert})
            console.log(advert)
           })
     
        });
       },[])

  return (
    <div>
        <h1>Appointments</h1>
        <ButtonAppBar/>
        <p>{appointments.userEmail} {appointments.date}</p>
    </div>
  )
}

Appointments.propTypes = {}

export default Appointments
