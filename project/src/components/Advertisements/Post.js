import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./PostCard.css";

export default function Post({ post }) {
  const { advert } = post;
  return (
    <div>
      <Card sx={{ width: 250, margin: 2 }}>
        <CardContent>
          <CardMedia component="img" height="140" image={post.advert.photo} />
          <Typography gutterBottom variant="h5" component="div">
            Name: {post.advert.firstName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Short description: {post.advert.service}
          </Typography>
          <Typography variant="body2" color="text.secondary"></Typography>
        </CardContent>
      </Card>
    </div>
  );
}
