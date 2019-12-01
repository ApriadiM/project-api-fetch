import React from 'react';
import { withRouter } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import axios from "axios";
import { Formik, ErrorMessage } from "formik";
import { loginValidation } from "../validate";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://apriadi11blog.wordpress.com/">
        apriadi11blog.wordpress.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignIn(props) {
  // constructor(props) {
  //     super(props)

  //     this.state = {
  //          email:"",
  //          password:""
  //     }
  // }
  // this.setState()

  const classes = useStyles();

  // const [signIn, setSignIn] = React.useState({ email: "", password: "" });

  // const handleSubmit = event => {
  //     event.preventDefault();

  //     const user = JSON.parse(localStorage.getItem("user"));

  //     if (user.email === signIn.email && user.password === signIn.password) {
  //         localStorage.setItem("isLogin", JSON.stringify(true));

  //         if (JSON.parse(localStorage.getItem("isLogin")) === true) {
  //             props.history.push("/");
  //         }
  //     } else {
  //         alert("Email atau Password salah");
  //     }
  // };

  // const handleChange = event => {
  //     // this.setState({
  //     //     ...this.state,
  //     //     [event.target.name]: event.target.value
  //     // })
  //     setSignIn({
  //         ...signIn,
  //         [event.target.name]: event.target.value
  //     });
  // };

  const API = process.env.REACT_APP_API_LIVE;
  
  return (
    <Container component="main" className={classes.root}>
      <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          {/* <form className={classes.form} noValidate 
                    onSubmit={handleSubmit}> */}
            
            <Formik
                    initialValues={{
                        email: "",
                        password: ""
                    }}
                    validate={loginValidation}
                    onSubmit={values => {
                        axios
                            .post(`${API}/user/login`, values)
                            .then(response => {
                                if (response.status === 200) {
                                    localStorage.setItem(
                                        "user",
                                        JSON.stringify(response.data.data)
                                    );
                                    localStorage.setItem("isLogin", true);
                                    props.history.push("/todo");
                                }
                            });
                    }}
                >
                    {({
                        values,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting
                    }) => (
                        <form
                            className={classes.form}
                            noValidate
                            onSubmit={handleSubmit}
                        >
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                defaultValue={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <p
                                style={{
                                    color: "red",
                                    fontStyle: "italic"
                                }}
                            >
                                <ErrorMessage name="email" />
                            </p>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                defaultValue={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <p
                                style={{
                                    color: "red",
                                    fontStyle: "italic"
                                }}
                            >
                                <ErrorMessage name="password" />
                            </p>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link to="/signup" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    )}
                </Formik>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}

export default withRouter(SignIn);
