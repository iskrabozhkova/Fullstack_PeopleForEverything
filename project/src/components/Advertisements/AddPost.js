import PropTypes from 'prop-types'
import React, {useState} from 'react'
import {Avatar, Button , TextField, Grid, Typography, Box, Container} from '@mui/material/'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ButtonAppBar from '../Menu/AppBar'
import './AddPost.css'
import AssignmentIcon from '@mui/icons-material/Assignment'
import CustomizedSnackbar from '../Snackbar/Snackbar'

function AddPost({onAddPost}) {
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState('');
    const [category,setCategory] = useState('');
    const [service,setService] = useState('');
    const [price,setPrice] = useState('');
    const [date,setDate] = useState([]);
    const [date1,setDate1] = useState([]);
    const [date2,setDate2] = useState([]);
    const [longDescription,setLongDescription] = useState('');
    const [photo,setPhoto] = useState('');
    const userDetails = JSON.parse(localStorage.getItem('userData'));
    const creatorId = userDetails._id;

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
function submitPost(event){
    event.preventDefault();
    onAddPost({firstName, lastName, category, service, longDescription, price, photo, date, date1, date2, creatorId});
    return <CustomizedSnackbar/>
}



  return (
    <div>
    <ThemeProvider theme={theme}>
    <ButtonAppBar/>
      <form className="form-container" onSubmit={submitPost}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        <Avatar sx={{ mt: 4, bgcolor: 'secondary.main' }}>
        <AssignmentIcon />
      </Avatar>
          <Typography component="h1" variant="h5">Add advertisement</Typography>
          <Box  className="box-post" sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="category"
                  label="category"
                  name="category"
                  value={category}
                  onChange={e => setCategory(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="service"
                  label="service"
                  type="text"
                  id="service"
                  value={service}
                  onChange={e => setService(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="longDescription"
                label="long description"
                type="text"
                id="long-description"
                value={longDescription}
                onChange={e => setLongDescription(e.target.value)}
              />
            </Grid>
              <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="price"
                label="price(lv)"
                type="text"
                id="price"
                value={price}
                onChange={e => setPrice(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="photo"
              label="add photo"
              type="text"
              id="photo"
              value={photo}
              onChange={e => setPhoto(e.target.value)}
            />
          </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
            name="someDate"
            label="Choose Date"
            InputLabelProps={{ shrink: true, required: true }}
            type="datetime-local"
           defaultValue={date}
            onChange={e => setDate(e.target.value)}
          />
          </Grid>        
          <Grid item xs={12} sm={6}>
          <TextField
          name="someDate"
          label="Choose Date"
          InputLabelProps={{ shrink: true, required: true }}
          type="datetime-local"
         defaultValue={date}
          onChange={e => setDate1(e.target.value)}
        />
        </Grid>  
        <Grid item xs={12} sm={6}>
        <TextField
        name="someDate"
        label="Choose Date"
        InputLabelProps={{ shrink: true, required: true }}
        type="datetime-local"
       defaultValue={date}
        onChange={e => setDate2(e.target.value)}
      />

      </Grid>  
            </Grid>
            <Button 
              color="secondary"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add advertisement
            </Button>
         
          </Box>
        </Box>
      </form>
    </ThemeProvider>  
    </div>
  )
}

AddPost.propTypes = {}

export default AddPost
