import React, {useState} from 'react'
import ResponsiveAppBar from '../navbar/Navbar'
import {
  Container,
  TextField,
  Button,
  Grid,
  Typography,
  Box,
  Paper
} from '@mui/material';

function Register() {

    const handleSubmit = (e) => {
        const formData = new FormData();
        
        const username = "";
        const fullname = "";
        const email = "";
        const phone = "";
        const password = "";
        const confirmPassword = "";


    }


  return (
    <div>
        <ResponsiveAppBar/>
        <h1>Register for Managing ....</h1>
        <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, mt: 5 }}>
        <Typography variant="h5" gutterBottom>
          Register
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                label="Username"
                name="username"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                label="Full Name"
                name="fullname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                label="Email"
                type="email"
                name="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                label="Phone No"
                type="tel"
                name="phone"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                label="Password"
                type="password"
                name="password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                label="Confirm Password"
                type="password"
                name="confirmPassword"
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" fullWidth>
                Register
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
    </div>
  )
}

export default Register