import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Button, Grid } from "@mui/material";
import "./DetailedAdd.css";
import BasicModal from "./BasicModal";
import Comments from "../Comments/Comments";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ButtonAppBarUser from "../Menu/AppBarUser";
import ButtonAppBar from '../Menu/AppBar'

function DetailedAd() {
  const { id } = useParams();
  const [ad, setAd] = useState([]);
  const [likes, setLikes] = useState("");
  const userDetails = JSON.parse(localStorage.getItem("userData"));

  useEffect(() => {
    axios({
      method: "GET",
      withCredentials: true,
      url: `http://localhost:8080/api/adverts/${id}`,
    }).then((res) => {
      setLikes(res.data.likes.length);
      setAd((old) => [...old, res.data]);
    });
  }, []);

  const likePost = (id) => {
    return axios({
      method: "PUT",
      data: id,
      withCredentials: true,
      url: `http://localhost:8080/api/ratings/${id}`,
    }).then((res) => {
      setLikes(res.data.likes.length);
    });
  };

  return (
    <div>
      {userDetails.role === 'user' ? <ButtonAppBarUser/> : <ButtonAppBar/>}
      <h1>Details about advertisement</h1>
      <Container className="container">
        <Grid container spacing={1}>
          <Grid container direction="column" sm={6} item={true}>
          <Container sx={{ padding: '20px', backgroundColor: '#d6dbf5;', borderRadius: 10}}>
            <h3 id="header-ad">Advertisement</h3>
            <h4>Username</h4>
            <p>
              {ad[0]?.firstName} {ad[0]?.lastName}
            </p>
            <h4>Category</h4>
            <p>{ad[0]?.category}</p>
            <h4>Description</h4>
            <p>{ad[0]?.longDescription}</p>
            <span className="likes">
              <Button
                onClick={() => {
                  likePost(id);
                }}
                variant="contained"
                sx={{ marginRight: 3, backgroundColor: "#4F45AC" }}
              >
                <ThumbUpIcon id="like-icon" className="icon" />
                Like
              </Button>

              <h3 id="like-heading">{likes} like this</h3>
            </span>
            </Container>
            <BasicModal
              date={ad[0]?.date}
              date1={ad[0]?.date1}
              date2={ad[0]?.date2}
              ad={ad}
            />
          </Grid>
          <Grid container item sm={6}>
            <Comments ad={ad[0]} id={id} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

DetailedAd.propTypes = {};

export default DetailedAd;
