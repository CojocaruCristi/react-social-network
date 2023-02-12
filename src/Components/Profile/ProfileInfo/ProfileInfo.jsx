import React, {useRef, useState} from "react";
import {Avatar, Box, Grid, makeStyles, Typography, Button} from "@material-ui/core";
import Skeleton from "@mui/material/Skeleton";
import ProfileStatus from './ProfileStatus';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ProfileEditForm from "./ProfileEditForm";
import EditIcon from '@mui/icons-material/Edit';
const useStyles = makeStyles((theme) => ({

    userContent: {
        marginBottom: 30
    }


}));


const ProfileInfo = (props) => {
    const [editMode, setEditMode] = useState(false);
    const fileInputRef = useRef(null);

    const handleButtonFileClick = (event) => {
        fileInputRef.current.click();
    }

    const uploadProfileImage = (event) => {
        if(event?.target?.files?.length) {
            const photoFile = event.target.files[0];
            props.changeProfileImageThunkCreator(photoFile);
        }
    }

    const onProfileEditSubmit = (data) => {
        const preparedData = {
            userId: data.userId,
            lookingForAJob:data.lookingForAJob,
            lookingForAJobDescription: data.lookingForAJobDescription,
            fullName: data.fullName,
            aboutMe: data.aboutMe,
            contacts: {
                github: data.github,
                vk: data.vk,
                facebook: data.facebook,
                instagram: data.instagram,
                twitter: data.twitter,
                website: data.website,
                youtube: data.youtube,
                mainLink: data.mainLink,
            }
        }
        props.changeProfileThunkCreator(preparedData).then((result) => {
            setEditMode(false);
        })
    }

    const classes = useStyles();
    return(
        <Grid item container className={classes.userContent}>

            {
                editMode ? (
                    <div style={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Typography variant={'h3'}>
                            Edit Profile
                        </Typography>
                        <ProfileEditForm defaultData={{
                            ...props?.profile,
                            ...props?.profile.contacts,
                        }} setEditMode={setEditMode}
                                         onSubmit={onProfileEditSubmit}
                                         isProfileFormLoading={props.isProfileFormLoading} />
                    </div>
                )
                    :
                    (
                        <Grid item container spacing={2} >
                            {
                                props.isProfileLoading ? (
                                        <Box
                                            sx={{
                                                bgcolor: '#121212',
                                                p: 8,
                                                width: '100%',
                                                display: 'flex',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            <Skeleton
                                                sx={{ bgcolor: 'grey.900' }}
                                                variant="rectangular"
                                                width={210}
                                                height={200}
                                            />
                                        </Box>
                                    )
                                    :
                                    (
                                        <>
                                            <Grid item>

                                                {
                                                    props.isProfileImageLoading ? (
                                                            <Box
                                                                sx={{
                                                                    bgcolor: '#121212',
                                                                    p: 8,
                                                                    width: '100%',
                                                                    display: 'flex',
                                                                    justifyContent: 'center',
                                                                }}
                                                            >
                                                                <Skeleton
                                                                    sx={{ bgcolor: 'grey.900' }}
                                                                    variant="rectangular"
                                                                    width={210}
                                                                    height={200}
                                                                />
                                                            </Box>
                                                        )
                                                        :
                                                        (
                                                            <div style={{
                                                                display: "flex",
                                                                flexDirection: "column",
                                                                justifyItems: 'center',
                                                                alignItems: 'center'
                                                            }}>
                                                                <Avatar variant={"square"} alt={props?.profile?.fullName} src={props.profile?.photos?.large} style={{height: 200, width: 200}}/>
                                                                {
                                                                    props.match.params.userId === 'me' && (
                                                                        <div style={{
                                                                            display: 'flex',
                                                                            flexDirection: "column",
                                                                            alignItems: 'start',
                                                                        }}>
                                                                            <input ref={fileInputRef} style={{display: 'none'}} type={"file"} onChange={uploadProfileImage} />
                                                                            <Button onClick={handleButtonFileClick} style={{marginTop: 10}} variant="contained" color={"primary"} endIcon={<CloudUploadIcon />}>
                                                                                Upload new avatar
                                                                            </Button>
                                                                            <Button onClick={() => setEditMode(true)} style={{marginTop: 10}} variant="contained" color={"primary"} endIcon={<EditIcon />}>
                                                                                Edit Profile
                                                                            </Button>
                                                                        </div>

                                                                    )
                                                                }

                                                            </div>

                                                        )
                                                }
                                            </Grid>
                                            <Grid item>
                                                <Typography  variant={"h3"} >{props?.profile?.fullName}</Typography>
                                                <br/>
                                                <ProfileStatus status={props?.profile?.aboutMe}
                                                               updateProfileStatusThunkCreator={props?.updateProfileStatusThunkCreator}
                                                               isStatusLoading={props.isStatusLoading}
                                                               routeMatch={props.match}
                                                />
                                                <Typography >Looking for a job ?: {props?.profile?.lookingForAJob ? "YES" : "NO"}</Typography>
                                                <Typography >Job Description: {props?.profile?.lookingForAJobDescription}</Typography>
                                                <Typography style={{
                                                    marginTop: 20,
                                                }} variant={'h5'}>Contacts</Typography>
                                                <Typography>Github: </Typography>
                                                <Typography>VK: </Typography>
                                                <Typography>Facebook: </Typography>
                                                <Typography>Instagram: </Typography>
                                                <Typography>Twitter: </Typography>
                                                <Typography>Website: </Typography>
                                                <Typography>Youtube: </Typography>
                                                <Typography>Main Link: </Typography>
                                            </Grid>
                                        </>
                                    )
                            }

                        </Grid>
                    )
            }




        </Grid>
    )
}

export default ProfileInfo;