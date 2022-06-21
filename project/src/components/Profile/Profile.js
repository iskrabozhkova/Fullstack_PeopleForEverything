import React from 'react'
import PropTypes from 'prop-types'

import axios from "axios"



function Profile() {
 const getUser = () => {
     return axios({
         method: "POST",
         data: window.history.state.email,
         withCredentials: true,
         url: "http://localhost:8080/api/users/getUser"
     })
     .then(res => {
         console.log(res);
        // console.log(res.config);
     })
 }
  return (
    <div>
        <h1>{window.history.state.email}</h1>
        <h1>{window.history.state.role}</h1>
    </div>
  )
}

Profile.propTypes = {}

export default Profile
