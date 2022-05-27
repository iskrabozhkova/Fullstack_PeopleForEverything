import PropTypes from 'prop-types'
import React, {useState} from 'react'
import {Avatar, Button , TextField, Grid, Typography, Box, Container} from '@mui/material/'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ButtonAppBar from '../Menu/AppBar'

function AddPost({onAddPost}) {
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState('');
    const [category,setCategory] = useState('');
    const [service,setService] = useState('');
    const [price,setPrice] = useState('');
    const [date,setDate] = useState('');
    const theme = createTheme();
function submitPost(event){
    event.preventDefault();
    onAddPost({firstName, lastName, category, service, price, date});
}

  return (
    <div>
    
    <ThemeProvider theme={theme}>
    <ButtonAppBar/>
      <form className="form-container" onSubmit={submitPost}>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}/>
          <Typography component="h1" variant="h5">Register</Typography>
          <Box  sx={{ mt: 3 }}>
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
                name="price"
                label="price"
                type="text"
                id="price"
                value={price}
                onChange={e => setPrice(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
            name="someDate"
            label="Some Date"
            InputLabelProps={{ shrink: true, required: true }}
            type="date"
           defaultValue={date}
            //value={formik.values.date}
            onChange={e => setDate(e.target.value)}
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
            <Grid>
             
            </Grid>
          </Box>
        </Box>
      </form>
    </ThemeProvider>
    
    </div>
  )
}

AddPost.propTypes = {}

export default AddPost
