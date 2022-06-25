import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import { useParams } from "react-router-dom";
import axios from 'axios'

function DetailedAd(props) {
  const { id } = useParams();
  //console.log(id.substring(1))

  useEffect(() => {
    axios({
         method: "GET",
         withCredentials: true,
         url: `http://localhost:8080/api/adverts/${id}`
    }).then(res => {
       console.log(res)
    });
   },[])
  return (
    <div>{id}</div>
  )
}

DetailedAd.propTypes = {}

export default DetailedAd
