import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./FavouriteCard.css";
import { Grid } from "@mui/material";

export default function FavCard({ post }) {
  return (
    <Grid container spacing={12}>
      <Grid item xs={10} ml={20} mt={20}>
        <Grid container spacing={12} columnGap={5} rowGap={5}></Grid>
        <Card sx={{ maxWidth: 345 }} className="fav-card">
          <CardContent>
            <CardMedia component="img" height="140" image={post.photo} />
            <Typography gutterBottom variant="h5" component="div">
              Name: {post.firstName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Short description: {post.service}
            </Typography>
            <Typography variant="body2" color="text.secondary"></Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
