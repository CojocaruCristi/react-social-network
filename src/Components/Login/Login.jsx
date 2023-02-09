import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {
    Button,
} from "@material-ui/core";
import { useForm } from 'react-hook-form';
import Checkbox from '@mui/material/Checkbox';
import {connect} from "react-redux";
import {loginThunkCreator, setErrorMessage} from "../../Redux/Reduсers/auth-reducer";
import {Redirect} from "react-router-dom";
import LoadingButton from "@mui/lab/LoadingButton";
import {Alert, Snackbar} from "@mui/material";

const LoginForm = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    return (
        <form onSubmit={handleSubmit(props.onSubmit)} autoComplete="off">
            <TextField
                error={Boolean(errors?.email?.message)}
                margin="normal"
                fullWidth
                label="Email"
                name="Email"
                {...register('email', {required: 'Email is required',})}
                autoComplete={'off'}
                helperText={errors?.email?.message}
            />
            <TextField
                error={Boolean(errors?.password?.message)}
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type="password"
                {...register('password', {required: 'Password is required',})}
                autoComplete={'off'}
                helperText={errors?.password?.message}
            />
            <div style={{
                display: 'flex',
                alignItems: 'center',
            }}>
                <Checkbox {...register('rememberMe')} />
                <Typography>
                    Remember me
                </Typography>
            </div>

            {
                props?.isLogInLoading ? (
                        <LoadingButton
                            fullWidth
                            loading
                            variant="contained"
                            color={"primary"}
                        >
                            Submit
                        </LoadingButton>
                    )
                    : (
                        <Button
                            type="submit"
                            color={"primary"}
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                        >
                            Sign In
                        </Button>

                    )
            }


        </form>
    );

}

const SignIn = (props) => {

        const onFormSubmit = async (data) => {
            await props.login(data.email, data.password, data.rememberMe);
        }

        if(props.isAuth) {
            return <Redirect to={"/profile"} />
        }


    return (
        <Container component="main" maxWidth="xs">
            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                autoHideDuration={4000}
                open={Boolean(props.errorMessage)}
                onClose={() => props.setErrorMessage('')}
                key={'top' + 'center'}
            >
                <Alert severity="error" sx={{ width: 200 }}>
                    {props.errorMessage}
                </Alert>
            </Snackbar>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box sx={{mt: 1}}>
                    <LoginForm onSubmit={onFormSubmit} isLogInLoading={props.isLogInLoading}/>
                </Box>
            </Box>
        </Container>
    );
}

export default connect((state) => ({
    isAuth: state.authData.isAuth,
    isLogInLoading: state.authData.isLogInLoading,
    errorMessage: state.authData.errorMessage,
}), {
    login: loginThunkCreator,
    setErrorMessage,
})(SignIn);