import React, {useState} from 'react'
import {Avatar, Button , TextField, MenuItem, Select, FormControl, InputLabel, Link, Grid, Typography, Box, Container} from '@mui/material/'
import { createTheme, ThemeProvider,styled } from '@mui/material/styles';
import './Registration.css'
import ButtonAppBar from '../Menu/AppBar';
import ButtonAppBarNotRegistered from '../Menu/AppBarNotRegistered';
import { LoadingButton } from '@mui/lab';
import { useFormik, Form, FormikProvider } from 'formik';
import * as Yup from 'yup';


export default function Registration({onRegister}) {
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
  const UserSchema = Yup.object().shape({
    id: Yup.string()
      .max(24, 'Too Long!'),
    firstName: Yup.string().max(15, 'Too Long'),
    lastName: Yup.string().max(15, 'Too Long!'),
    password: Yup.string().min(7, 'Too Short!'),
    confirmedPassword: Yup.string().min(7, 'Too Short!'),
    email: Yup.string().email(),
    role: Yup.string()
  })

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      password: "",
      confirmedPassword: "",
      email: "",
      role: "user"
    },
    validationSchema: UserSchema,
    onSubmit: ({firstName, lastName, password, email, role}) => {
      onRegister({firstName, lastName, password, email, role});
    }
  });
  const roles = [{value: 'user',},{value: 'freelancer',}];
  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  return (
    <div>
      <ThemeProvider theme={theme}>
      <ButtonAppBarNotRegistered/>
        <form className="form-container" onSubmit={formik.handleSubmit}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
          <Avatar sx={{ mt: 8, mb: 1, bgcolor: 'secondary.main' }}/>
          <Typography component="h1" variant="h5">Registration</Typography>
            <Box sx={{ m: 3 }} className="box-register">
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    {...getFieldProps('firstName')}
                    error={Boolean(touched.firstName && errors.firstName)}
                    helperText={touched.firstName && errors.firstName}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    {...getFieldProps('lastName')}
                    error={Boolean(touched.lastName && errors.lastName)}
                    helperText={touched.lastName && errors.lastName}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    {...getFieldProps('email')}
                    error={Boolean(touched.email && errors.email)}
                    helperText={touched.email && errors.email}
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
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    {...getFieldProps('password')}
                    error={Boolean(touched.password && errors.password)}
                    helperText={touched.password && errors.password}
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
                  value={formik.values.confirmedPassword}
                    onChange={formik.handleChange}
                    {...getFieldProps('confirmedPassword')}
                    error={Boolean(touched.confirmedPassword && errors.confirmedPassword)}
                    helperText={touched.confirmedPassword && errors.confirmedPassword}
                />
              </Grid>
                <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="outlined-select-currency"
                  select
                  label="Select"
                  value={formik.values.role}
                  onChange={formik.handleChange}
                  {...getFieldProps('role')}
                  error={Boolean(touched.role && errors.role)}
                  helperText={touched.role && errors.role}
                >
                {roles.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                  {option.value}
                  </MenuItem>
                ))}
        </TextField>
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
                  <Link href="/login" variant="body2">
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
