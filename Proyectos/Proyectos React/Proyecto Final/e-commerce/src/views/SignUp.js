import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Autocomplete from '@mui/material/Autocomplete';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios'
import useForm from '../hooks/useForm';
import { useHistory } from 'react-router'
import Navbar from '../component/Navbar/Navbar'

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function SignUp() {

    let history = useHistory();
    const sendData = (data) => {
        if (data.password === data.password_confirm) {
            delete data.password_confirm
            axios.post("https://ecomerce-master.herokuapp.com/api/v1/signup", data)
                .then((response) => {
                    if (response.status === 200) {
                        //Cuando se crea el usuario
                        console.log(response.status)
                        history.push('/')
                        alert('El usuario se ha creado correctamente');
                    }
                }).catch((error) => {
                    alert(error.response.data.message)
                })
        } else {
            alert("Password no coinciden")
        }
    }

    // const roleOptions = [
    //         {label: 'CUSTOMER', role: 'CUSTOMER'},
    //         {label: 'ADMIN', role: 'ADMIN'}
    //     ];

        // const genderOptions = [
        //     {label: 'Men', gender: 'M'},
        //     {label: 'Female', gender: 'F'},
        //     {label: 'Other', gender: 'O'}
        // ];

    const { input, handleInputChange, handleSubmit } = useForm(sendData, {})

    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    value={input.first_name}
                                    required
                                    fullWidth
                                    label="Name"
                                    id="first_name"
                                    name="first_name"
                                    onChange={handleInputChange}
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    value={input.last_name}
                                    label="Last Name"
                                    id="last_name"
                                    name="last_name"
                                    onChange={handleInputChange}
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    label="Email"
                                    fullWidth
                                    value={input.email}
                                    id="email"
                                    name="email"
                                    onChange={handleInputChange}
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Password"
                                    required
                                    fullWidth
                                    value={input.password}
                                    name="password"
                                    onChange={handleInputChange}
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    label="Confirm Password"
                                    value={input.password_confirm}
                                    name="password_confirm"
                                    onChange={handleInputChange}
                                    type="password"
                                    id="password_confirm"
                                    autoComplete="new-password"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <TextField
                                    required
                                    fullWidth
                                    label="Role"
                                    value={input.role}
                                    name="role"
                                    onChange={handleInputChange}
                                    type="text"
                                    id="role"
                                    autoComplete="new-role"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <TextField
                                    required
                                    fullWidth
                                    label="Gender"
                                    value={input.gender}
                                    name="gender"
                                    onChange={handleInputChange}
                                    type="text"
                                    id="gender"
                                    autoComplete="new-gender"
                                />
                            </Grid>
                            {/* <Grid item xs={12} sm={6}>
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={genderOptions}
                                    // value={input.gender}
                                    // name="gender"
                                    onChange={handleInputChange}
                                    renderInput={(params) => <TextField {...params} 
                                    label="Gender" 
                                    value={input.gender}
                                    name="gender"
                                    onChange={handleInputChange} />}
                                />
                            </Grid> */}
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="I want to receive inspiration, marketing promotions and updates via email."
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="#" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
}