import React, {useState, useEffect, createContext} from 'react'
import { useParams } from "react-router-dom";
import PropTypes from 'prop-types'
import axios from "axios"
import BasicModal from '../Advertisements/BasicModal';


export const UserContext = createContext({});
function Profile() {
    const { id } = useParams();
    const [userData, setUserData] = useState([]);

    useEffect(() => {
      axios({
           method: "GET",
           withCredentials: true,
           url: `http://localhost:8080/api/users/${id}`
      }).then(res => {
         setUserData(old => [...old, res.data])
   
      });
     },[])
  return (
    <div>
      <h1>Profile</h1>
      <h1>{userData[0]?.firstName}</h1>
      <h1>{userData[0]?.lastName}</h1>
      <h1>{userData[0]?.email}</h1>
    </div>
  )
}

Profile.propTypes = {}

export default Profile
