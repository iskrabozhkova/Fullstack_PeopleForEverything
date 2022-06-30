import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { Container, TextField, Typography, Button, Grid, Avatar, Divider } from '@mui/material';
import axios from 'axios';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Comments({ad, id}) {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState("");
    const userDetails = JSON.parse(localStorage.getItem('userData'));

    const theme = createTheme({
        palette: {
          secondary: {
            main: "#4F45AC"
          }
        },
        typography: {
          fontFamily: [
            'Courier New',
             'Courier', 
             'monospace'
          ].join(',')
      }});

    useEffect(() => {
        axios({
             method: "GET",
             withCredentials: true,
             url: `http://localhost:8080/api/comments/${id}`
        }).then(res => {
            const commentsData = res.data.comments;
            commentsData.map((comment, i) => {
                const user = comment.userName;
                const content = comment.comment;
                setComments(old => [...old, {commentContent: content, userName: user}])
            })
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
          window.location.reload();
       });
    }

  return (
    
    <div>
    <ThemeProvider theme={theme}>
        <Container>
            <Typography gutterBottom variant="h6" sx={{ fontWeight: 'bold' }}>Comments</Typography>
            {
                comments.map((c, i) => (
                        <div key={i}>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                    <Avatar alt="Remy Sharp"/>
                                </Grid>
                            <Grid justifyContent="left" item xs zeroMinWidth>
                                <h4 style={{ margin: 0, textAlign: "left" }}>{c.userName}</h4>
                                <p style={{ textAlign: "left" }}>
                                    {c.commentContent}
                                </p>
                            </Grid>
                            </Grid>
                      <Divider variant="fullWidth" style={{ margin: "10px 0" }} />
                        </div>
                ))
            }
        </Container>
        <Container>
            <TextField
                fullWidth
                rows={4}
                variant="outlined"
                label="Write your comment"
                multiline
                value={comment}
                onChange={e => setComment(e.target.value)}
            ></TextField>
            <Button 
                fullWidth 
                disabled={!comment} 
                variant="contained" 
                color="primary" 
                sx={{marginTop: 2, backgroundColor: "#4F45AC"}}
                onClick={handleClick}>
                Comment
            </Button>
        </Container>
        </ThemeProvider>
    </div>
  )
}

Comments.propTypes = {}

export default Comments
