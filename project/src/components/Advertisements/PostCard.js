import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import "./PostCard.css";

export default function PostCard({ post, addToFavs, inFavs, ...rest }) {
  const [disabled, setDisabled] = React.useState(false);
  const userDetails = JSON.parse(localStorage.getItem("userData"));
  const getDetails = (post) => {
    window.location.replace(
      `http://localhost:3000/addvertisements/:${post._id}`
    );
  };

  function onAddToFavs(e) {
    return axios({
      method: "POST",
      data: {
        post,
        userId: userDetails._id,
      },
      withCredentials: true,
      url: "http://localhost:8080/api/favs",
    }).then((res) => {
      setDisabled(true);
    });
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
    <Card sx={{ width: 250, border: '1px solid #4F45AC',  }}>
      <CardContent>
        <CardMedia component="img" height="140" image={post.photo} />
        <Typography gutterBottom variant="h5" component="div">
           {post.firstName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.service}
        </Typography>
        <Typography variant="body2" color="text.secondary"></Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          sx={{ backgroundColor: "#4F45AC" }}
          onClick={() => getDetails(post)}
        >
          See details
        </Button>

        <Button
          size="small"
          variant="contained"
          sx={{ backgroundColor: "#4F45AC" }}
          onClick={onAddToFavs}
          disabled={disabled}
        >
          Add to favs
        </Button>
      </CardActions>
    </Card>
  );
}
