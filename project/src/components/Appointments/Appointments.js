import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios';

function Appointments() {
    const userDetails = JSON.parse(localStorage.getItem('userData'));
    useEffect(() => {
        axios({
             method: "POST",
             data: userDetails._id,
             withCredentials: true,
             url: `http://localhost:8080/api/appointments/allAppointments`
        }).then(res => {
           console.log(res);
     
        });
       },[])
  return (
    <div>Appointments</div>
  )
}

Appointments.propTypes = {}

export default Appointments
