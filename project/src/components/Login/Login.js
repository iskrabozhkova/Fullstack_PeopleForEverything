import React, {useState} from 'react'
import {Avatar, Button , TextField, MenuItem, Select, FormControl, InputLabel, Link, Grid, Typography, Box, Container} from '@mui/material/'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './Login.css'
import ButtonAppBar from '../Menu/AppBar';
import ButtonAppBarNotRegistered from '../Menu/AppBarNotRegistered';

export default function Login({onLogin}) {
  const theme = createTheme();
  const [password,setPassword] = useState('');
  const [email,setEmail] = useState('');
  const [role,setRole] = useState('');

  function submitLogin(event){
    event.preventDefault();
      onLogin({email, password, role});
  }

  return (
    <div>
      <ThemeProvider theme={theme}>
      <ButtonAppBarNotRegistered/>
        <form className="form-container" onSubmit={submitLogin}>
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}/>
            <Typography component="h1" variant="h5">Login</Typography>
            <Box  sx={{ mt: 3 }}>
            <Grid container spacing={2}>
           
                <Grid item xs={12} >
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl sx={{ m: 1, width: 500 }}>
                    <InputLabel id="role-input">Login as</InputLabel>
                    <Select
                      id="select-role"
                      value={role}
                      onChange={e => setRole(e.target.value)}
                    >
                      <MenuItem value={'User'}>User</MenuItem>
                      <MenuItem value={'Freelancer'}>Freelancer</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              <Button 
              color="secondary"
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Login
              </Button>
              </Grid>
            </Box>
          
          </Box>
        </form>
      </ThemeProvider>
    </div>
  )
}
