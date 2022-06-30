import * as React from 'react';
// import { useState, createContext, useContext } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import axios from 'axios';
import './BasicModal.css'
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



export default function BasicModal({date, date1, date2, ad}) {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  
  const makeAppointment = (e) => {
    const date = e.target.innerText;
    const userEmail = email;
    const advert = ad;
    //this.disabled = true;
    console.log("Creator", advert[0])
    console.log("id", advert[0].creatorId)
    return axios({
      method: "POST",
      data: {
        date: date,
        userEmail: userEmail,
        advert: advert[0],
        creatorId: advert[0].creatorId
      },
      withCredentials: true,
      url: "http://localhost:8080/api/appointments"
  }).then(res => {
    //e.currentTarget.disabled = true;
    console.log(res);
  })

    
  }

  return (
    <div>
    <Box textAlign='center'>
      <Button 
        variant='contained' 
        onClick={handleOpen} 
        sx={{marginTop: 5, backgroundColor: "#4F45AC"}}>
        Make an appointment
        </Button>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Typography variant="h6" component="h2" sx={{textAlign: 'center'}}>
          Make an appointment
          </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Enter your email:
          </Typography>
          <TextField
          required
          id="email"
          label="Email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           Choose date: 
          </Typography>
          
          <Button 
            variant='contained' 
            startIcon={<BookmarkAddedIcon/>} 
            sx={{margin: 1}} 
            onClick={makeAppointment}>
            {date}
            </Button>
          <Button 
            variant='contained' 
            startIcon={<BookmarkAddedIcon/>} 
            sx={{margin: 1}} 
            onClick={makeAppointment}>
            {date1}
            </Button>
          <Button 
            variant='contained' 
            startIcon={<BookmarkAddedIcon/>} 
            sx={{margin: 1}} 
            onClick={makeAppointment}>
            {date2}
          </Button>
        </Box>
      </Modal>
    </div>
  );
}