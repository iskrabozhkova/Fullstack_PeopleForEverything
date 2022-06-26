import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import { useParams } from "react-router-dom";
import axios from 'axios'
import ButtonAppBar from '../Menu/AppBar';
import {Container, Button} from '@mui/material'
import './DetailedAdd.css'
import BasicModal from './BasicModal';

function DetailedAd() {
  const { id } = useParams();
  const [ad, setAd] = useState([]);
  useEffect(() => {
    axios({
         method: "GET",
         withCredentials: true,
         url: `http://localhost:8080/api/adverts/${id}`
    }).then(res => {
      //console.log(res.data)
      setAd(old => [...old, res.data]);
    });
   },[])
  
   console.log(ad[0]?.firstName)
  return (
    <div>
      <ButtonAppBar></ButtonAppBar>
      <h1>Details about advertisement</h1>
      <Container className="container">
      <h1>{ad[0]?.firstName}</h1>
      <h1>{ad[0]?.lastName}</h1>
      <h1>{ad[0]?.category}</h1>
      <h1>{ad[0]?.longDescription}</h1>
      <BasicModal date={ad[0]?.date} date1={ad[0]?.date1} date2={ad[0]?.date2} ad={ad}/>
      </Container>
    </div>
  )
}

DetailedAd.propTypes = {}

export default DetailedAd
