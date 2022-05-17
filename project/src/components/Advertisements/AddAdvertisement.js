import React, {useState} from 'react'
import {Avatar, Button , TextField, Grid, Typography, Box, Container} from '@mui/material/'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ButtonAppBar from '../Registration/AppBar';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';



function AddAdvertisement({addAdvertisement}) {
  const theme = createTheme();
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState('');
  const [category,setCategory] = useState('');
  const [service,setService] = useState('');
  const [price,setPrice] = useState('');
  const [date,setDate] = useState('');

  return (
    <div>
      <ThemeProvider theme={theme}>
        <ButtonAppBar />
        <form className="form-container" onSubmit={addAdvertisement}>
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} />
            <Typography component="h1" variant="h5">Post your advertisement</Typography>
            <Box sx={{ mt: 3 }}>
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
              <TextField
              name="lastName"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              autoFocus
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="Category"
                label="Category"
                name="category"
                value={category}
                onChange={e => setCategory(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
              name="service"
              required
              fullWidth
              id="service"
              label="Service"
              autoFocus
              value={service}
              onChange={e => setService(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="price"
              label="Price"
              name="lastName"
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
        />
        </Grid>          
                <Button
                  color="secondary"
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Post it
                </Button>
              </Grid>
            </Box>

          </Box>
        </form>
      </ThemeProvider>
    </div>
  )
}



export default AddAdvertisement
