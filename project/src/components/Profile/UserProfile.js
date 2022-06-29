import React, {useState, useEffect, createContext} from 'react'
import { useParams } from "react-router-dom";
import PropTypes from 'prop-types'
import axios from "axios"
import BasicModal from '../Advertisements/BasicModal';
import ButtonAppBarUser from '../Menu/AppBarUser';

function UserProfile() {
    const userDetails = JSON.parse(localStorage.getItem('userData'));
  return (
    <div>
        <ButtonAppBarUser/>
        <h1>Profile</h1>
        <h1>{userDetails.firstName}</h1>
        <h1>{userDetails.lastName}</h1>
        <h1>{userDetails.email}</h1>
    </div>
  )
}

UserProfile.propTypes = {}

export default UserProfile