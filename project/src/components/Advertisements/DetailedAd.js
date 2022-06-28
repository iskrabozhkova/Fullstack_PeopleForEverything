import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import { useParams } from "react-router-dom";
import axios from 'axios'
import ButtonAppBar from '../Menu/AppBar';
import {Container, Button} from '@mui/material'
import './DetailedAdd.css'
import BasicModal from './BasicModal';
import Comments from '../Comments/Comments';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

function DetailedAd() {
  const { id } = useParams();
  const [ad, setAd] = useState([]);
  const [likes, setLikes] = useState("");

  useEffect(() => {
    axios({
         method: "GET",
         withCredentials: true,
         url: `http://localhost:8080/api/adverts/${id}`
    }).then(res => {
      //console.log(res.data)
      setLikes(res.data.likes.length)
      setAd(old => [...old, res.data]);
    });
   },[])

   const likePost = (id) => {
    return axios({
      method: "PUT",
      data: id,
      withCredentials: true,
      url: `http://localhost:8080/api/ratings/${id}`
  }).then(res => {
    setLikes(res.data.likes.length);
  })

  }
  
   console.log(ad[0]?.firstName)
  return (
    <div>
      <ButtonAppBar></ButtonAppBar>
      <h1>Details about advertisement</h1>
      <Container className="container">
      <h3>Username</h3>
      <p>{ad[0]?.firstName} {ad[0]?.lastName}</p>
      <h3>Category</h3>
      <p>{ad[0]?.category}</p>
      <h3>Description</h3>
      <p>{ad[0]?.longDescription}</p>
      <div className="likes">
        <h3 id="like-heading">Like</h3>
        <ThumbUpIcon id="like-icon" className="icon" onClick={() => {likePost(id)}}/>
      </div>
      <h3>{likes} like this</h3>
      <BasicModal date={ad[0]?.date} date1={ad[0]?.date1} date2={ad[0]?.date2} ad={ad}/>
      </Container>
      <Comments ad={ad[0]} id={id}/>
    </div>
  )
}

DetailedAd.propTypes = {}

export default DetailedAd
