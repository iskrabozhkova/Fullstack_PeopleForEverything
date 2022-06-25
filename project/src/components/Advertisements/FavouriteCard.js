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


export default function FavCard({post}) {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Name: {post.firstName}
        </Typography>
      </CardContent>
    </Card>
  );
}