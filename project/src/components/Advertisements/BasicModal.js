import * as React from 'react';
// import { useState, createContext, useContext } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
// import Profile from '../Profile/Profile'
// import {UserContext} from '../Profile/Profile'


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



export default function BasicModal({date, date1, date2}) {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  
  const makeAppointment = (e) => {
    const date = e.target.innerText;
    const userEmail = email;
    
  }

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
     
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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
          
          <Button onClick={makeAppointment}>{date}</Button>
          <Button onClick={makeAppointment}>{date1}</Button>
          <Button onClick={makeAppointment}>{date2}</Button>
        </Box>
      </Modal>
    </div>
  );
}