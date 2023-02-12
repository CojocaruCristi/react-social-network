import React from 'react';
import TextField from '@mui/material/TextField';
import {
    Button,
} from "@material-ui/core";
import { useForm, Controller  } from 'react-hook-form';
import {Alert, Snackbar} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import LoadingButton from "@mui/lab/LoadingButton";
import CircularProgress from '@mui/material/CircularProgress';

const ProfileEditForm = (props) => {
    const { register,  handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            ...props.defaultData
        },

    });


    return (
        <form onSubmit={handleSubmit(props.onSubmit)} style={{
            display: 'flex',
            flexDirection: "column",
            alignItems: 'start',
            width: '70%',
            marginBottom: 40,
        }}>
            <TextField
                error={Boolean(errors?.fullName?.message)}
                margin="normal"
                fullWidth
                label="Full Name"
                {...register('fullName', {required: 'Full name is required',})}
                autoComplete={'off'}
                helperText={errors?.fullName?.message}
            />
            <TextField
                margin="normal"
                fullWidth
                label="About Me"
                {...register('aboutMe')}
                autoComplete={'off'}
            />
            <div style={{
                display: 'flex',
                alignItems: 'center',
            }}>
                {/*<Checkbox checked={checkboxState}*/}
                {/*          onChange={(event) => setCheckboxState((prevState) => !prevState)}  {...register('lookingForAJob')} />*/}

                <Checkbox {...register('lookingForAJob')} />
                <Typography>
                    Looking for a job ?
                </Typography>
            </div>

            <TextField
                margin="normal"
                fullWidth
                label="Job Description"
                name="Job Description"
                {...register('lookingForAJobDescription',)}
                autoComplete={'off'}
                multiline
                rows={4}
            />
            <div style={{
                width: '100%',
                marginTop: 30,
                display: "flex",
                flexDirection: 'column',
                alignItems: 'start'
            }}>
                <Typography variant="h5">Contacts</Typography>
                <TextField
                    margin="normal"
                    style={{
                        width: '45%',
                    }}
                    label="github"
                    name="github"
                    {...register('github',)}
                    autoComplete={'off'}
                />
                <TextField
                    margin="normal"
                    style={{
                        width: '45%',
                    }}
                    fullWidth
                    label="vk"
                    name="vk"
                    {...register('vk',)}
                    autoComplete={'off'}
                />
                <TextField
                    margin="normal"
                    style={{
                        width: '45%',
                    }}
                    fullWidth
                    label="facebook"
                    name="facebook"
                    {...register('facebook',)}
                    autoComplete={'off'}
                />
                <TextField
                    margin="normal"
                    style={{
                        width: '45%',
                    }}
                    fullWidth
                    label="instagram"
                    name="instagram"
                    {...register('instagram',)}
                    autoComplete={'off'}
                />
                <TextField
                    margin="normal"
                    style={{
                        width: '45%',
                    }}
                    fullWidth
                    label="twitter"
                    name="twitter"
                    {...register('twitter',)}
                    autoComplete={'off'}
                />
                <TextField
                    margin="normal"
                    style={{
                        width: '45%',
                    }}
                    fullWidth
                    label="website"
                    name="website"
                    {...register('website',)}
                    autoComplete={'off'}
                />
                <TextField
                    margin="normal"
                    style={{
                        width: '45%',
                    }}
                    fullWidth
                    label="youtube"
                    name="youtube"
                    {...register('youtube',)}
                    autoComplete={'off'}
                />
                <TextField
                    margin="normal"
                    style={{
                        width: '45%',
                    }}
                    fullWidth
                    label="Main Link"
                    name="Main Link"
                    {...register('mainLink',)}
                    autoComplete={'off'}
                />
            </div>
            {
                props?.isProfileFormLoading ? (
                    <div style={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center'}}
                    >
                        <CircularProgress />
                    </div>
                    )
                    : (
                        <div style={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                        }}>

                            <Button
                                color={"secondary"}
                                // fullWidth
                                variant="outlined"
                                onClick={(event) => {
                                    event.preventDefault();
                                    props.setEditMode(false);
                                }}
                                style={{
                                    margin: 20
                                }}
                            >
                                Cancel
                            </Button>

                            <Button
                                type="submit"
                                color={"primary"}
                                variant="contained"
                                style={{
                                    margin: 20,
                                    width: 200,
                                }}
                            >
                                Save
                            </Button>
                        </div>


                    )
            }
        </form>
    );
}

export default ProfileEditForm;