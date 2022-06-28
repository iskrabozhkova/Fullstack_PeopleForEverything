import React from 'react'
import {Avatar, Button , TextField, MenuItem, Grid, Typography, Box} from '@mui/material/'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ButtonAppBar from '../Menu/AppBar';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Login({onLogin}) {
  const theme = createTheme();
  const UserSchema = Yup.object().shape({
    password: Yup.string().min(7, 'Too Short!'),
    email: Yup.string().email(),
    role: Yup.string()
  })

  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
      role: "user"
    },
    validationSchema: UserSchema,
    onSubmit: ({password, email, role}) => {
      onLogin({password, email, role});
    }
  });
  const roles = [{value: 'user',},{value: 'freelancer',}];
  const { errors, touched, getFieldProps } = formik;

  return (
    <div>
      <ThemeProvider theme={theme}>
      <ButtonAppBar/>
        <form className="form-container" onSubmit={formik.handleSubmit}>
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
                Login
              </Button>
            </Box>
          </Box>
        </form>
      </ThemeProvider>
    </div>
  )
}
