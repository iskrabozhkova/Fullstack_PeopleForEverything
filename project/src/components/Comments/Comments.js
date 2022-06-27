import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { Container, TextField, Typography, Button } from '@mui/material';
import axios from 'axios';

function Comments({ad}) {
    console.log(ad);
    const [comments, setComments] = useState([1,2,3]);
    const [comment, setComment] = useState("");
    const userDetails = JSON.parse(localStorage.getItem('userData'));

    const handleClick = () => {
        const userName =  userDetails.firstName;
        return axios({
            method: "POST",
            data: {
                userName,
                comment, 
                adId: ad._id
            },
            withCredentials: true,
            url: `http://localhost:8080/api/comments`
       }).then(res => {
          console.log(res);
    
       });
    }

  return (
    <div>
        <Container>
            <Typography gutterBottom variant="h6">Comments</Typography>
            {
                comments.map((c, i) => (
                    <Typography key={i} gutterBottom variant="subtitle1"> Comment {i}</Typography>
                ))
            }
        </Container>
        <Container>
            <Typography>Write comment</Typography>
            <TextField
                fullWidth
                rows={4}
                variant="outlined"
                label="Comment"
                multiline
                value={comment}
                onChange={e => setComment(e.target.value)}
            ></TextField>
            <Button fullWidth disabled={!comment} variant="contained" color="primary" onClick={handleClick}>Comment</Button>
        </Container>
    </div>
  )
}

Comments.propTypes = {}

export default Comments
