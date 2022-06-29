import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Navigate } from 'react-router-dom'
import DetailedAd from './DetailedAd';
import axios from 'axios';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import './PostCard.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function PostCard({post, addToFavs, inFavs, ...rest}) {
const getDetails = (post) =>{
//   return axios({
//     method: "GET",
//     withCredentials: true,
//     url: "http://localhost:8080/api/adverts/:id"
// }).then(res => {
  //return <Navigate to={`/addvertisements/:${post._id}`}/>
  window.location.replace(`http://localhost:3000/addvertisements/:${post._id}`)
}
//)
  
//}

  function onAddToFavs() {
    //addToFavs && addToFavs(post);
    return axios({
      method: "POST",
      data: post,
      withCredentials: true,
      url: "http://localhost:8080/api/favs"
  }).then(res => console.log(res))
  }
  // const likePost = (id) => {
  //   return axios({
  //     method: "PUT",
  //     data: id,
  //     withCredentials: true,
  //     url: "http://localhost:8080/api/ratings"
  // })

  // }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
      <CardMedia
      component="img"
      height="140"
      image={post.photo}
    />
        <Typography gutterBottom variant="h5" component="div">
          Name: {post.firstName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Short description: {post.service}
        </Typography>
        <Typography variant="body2" color="text.secondary">
  
      </Typography>
      
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => getDetails(post)}>See details</Button>
        <FavoriteBorderIcon sx={{marginLeft: 6, cursor: 'pointer'}}>
          <Button size="small" onClick={onAddToFavs}>
          </Button>
        </FavoriteBorderIcon>
      </CardActions>
    </Card>
  );
}