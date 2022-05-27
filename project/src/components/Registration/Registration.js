import React, {useState} from 'react'
import {Avatar, Button , TextField, MenuItem, Select, FormControl, InputLabel, Link, Grid, Typography, Box, Container} from '@mui/material/'
import { createTheme, ThemeProvider,styled } from '@mui/material/styles';
import './Registration.css'
import ButtonAppBar from '../Menu/AppBar';

export default function Registration({onRegister}) {
  const theme = createTheme();
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState('');
  const [password,setPassword] = useState('');
  const [confirmedPassword,setConfirmedPassword] = useState('');
  const [email,setEmail] = useState('');
  const [role,setRole] = useState('');

  function submitRegistration(event){
    event.preventDefault();
      onRegister({firstName, lastName, email, password, confirmedPassword});
  }

  return (
    <div>
      <ThemeProvider theme={theme}>
      <ButtonAppBar/>
        <form className="form-container" onSubmit={submitRegistration}>
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
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Confirm password"
                  type="password"
                  id="password"
                  value={confirmedPassword}
                  onChange={e => setConfirmedPassword(e.target.value)}
                />
              </Grid>
                <Grid item xs={12}>
                  <FormControl sx={{ m: 1, width: 500 }}>
                    <InputLabel id="role-input">Register as</InputLabel>
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
              </Grid>
              <Button 
              color="secondary"
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Register
              </Button>
              <Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </form>
      </ThemeProvider>
    </div>
  )
}
