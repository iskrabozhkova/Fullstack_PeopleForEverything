import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { Container, TextField, Typography, Button } from '@mui/material';
import axios from 'axios';

function Comments({ad, id}) {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState("");
    const userDetails = JSON.parse(localStorage.getItem('userData'));
    
    useEffect(() => {
        axios({
             method: "GET",
             withCredentials: true,
             url: `http://localhost:8080/api/comments/${id}`
        }).then(res => {
            console.log("cccccc")
            const user = res.data.comments[0].userName;
            const content = res.data.comments[0].comment;
            setComments(old => [...old, {commentContent: content, userName: user}])
          
          
        });
       },[])

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
                        <div key={i}>
                        <Typography  gutterBottom variant="subtitle1">  {c.userName}</Typography>
                        <Typography  gutterBottom variant="subtitle1">  {c.commentContent}</Typography>
                        </div>
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
