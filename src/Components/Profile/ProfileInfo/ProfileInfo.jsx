import React, {useRef} from "react";
import {Avatar, Box, Grid, makeStyles, Typography, Button} from "@material-ui/core";
import Skeleton from "@mui/material/Skeleton";
import ProfileStatus from './ProfileStatus';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const useStyles = makeStyles((theme) => ({

    userContent: {
        marginBottom: 30
    }


}));


const ProfileInfo = (props) => {

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

    const classes = useStyles();
    return(
        <Grid item container className={classes.userContent}>
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
                                                        !props.match.params.userId && (
                                                            <>
                                                                <input ref={fileInputRef} style={{display: 'none'}} type={"file"} onChange={uploadProfileImage} />
                                                                <Button onClick={handleButtonFileClick} style={{marginTop: 10}} variant="contained" color={"primary"} endIcon={<CloudUploadIcon />}>
                                                                    Upload new avatar
                                                                </Button>
                                                            </>

                                                        )
                                                    }

                                                </div>

                                            )
                                    }
                                </Grid>
                                <Grid item>
                                    <Typography variant={"h5"} >{props?.profile?.fullName}</Typography>
                                    <br/>
                                    {/*<Typography >About Me: {props?.profile?.aboutMe}</Typography>*/}
                                    <ProfileStatus status={props?.profile?.aboutMe}
                                                   updateProfileStatusThunkCreator={props?.updateProfileStatusThunkCreator}
                                                   isStatusLoading={props.isStatusLoading}
                                                   routeMatch={props.match}
                                    />
                                    <Typography >Date of Birth: {props?.profile?.dateOfBirth}</Typography>
                                    <Typography >City: {props?.profile?.city}</Typography>
                                    <Typography>Education: {props?.profile?.education}</Typography>
                                    <Typography>Web Site: {props?.profile?.webSite}</Typography>
                                </Grid>
                            </>
                        )
                }

            </Grid>
        </Grid>
    )
}

export default ProfileInfo;