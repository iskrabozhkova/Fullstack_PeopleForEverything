import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import { useParams } from "react-router-dom";
import axios from 'axios'

function DetailedAd(props) {
  const { id } = useParams();
  const [ad, setAd] = useState([]);
  useEffect(() => {
    axios({
         method: "GET",
         withCredentials: true,
         url: `http://localhost:8080/api/adverts/${id}`
    }).then(res => {
      console.log(res)
      setAd(old => [...old, res.data]);
    });
   },[])
   console.log(ad[0].firstName)
  return (
    <div>
      <h1>{ad[0].firstName}</h1>
      <h1>{ad[0].category}</h1>
      <h1>{ad[0].service}</h1>
      <h1>{ad[0].price}</h1>
    </div>
  )
}

DetailedAd.propTypes = {}

export default DetailedAd
