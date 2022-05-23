import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function PostCard({post}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {post.firstName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.service}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {post.date}
      </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Delete</Button>
        <Button size="small">Make an appointment</Button>
        <Button size="small">Add to Favourites</Button>
      </CardActions>
    </Card>
  );
}