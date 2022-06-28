import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios';

function Appointments() {
    const userDetails = JSON.parse(localStorage.getItem('userData'));
    const id = userDetails._id;
    useEffect(() => {
        axios({
             method: "GET",
             withCredentials: true,
             url: `http://localhost:8080/api/appointments/${id}`
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
