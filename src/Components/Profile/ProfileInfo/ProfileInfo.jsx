import React from "react";
import {Avatar, Box, Grid, makeStyles, Typography} from "@material-ui/core";
import Skeleton from "@mui/material/Skeleton";



const useStyles = makeStyles((theme) => ({

    userContent: {
        marginBottom: 30
    }


}));


const ProfileInfo = (props) => {

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
                                    <Avatar variant={"square"} alt={props?.profile?.fullName} src={props.profile?.photos?.large} style={{height: 200, width: 200}}/>
                                </Grid>
                                <Grid item>
                                    <Typography variant={"h5"} >{props?.profile?.fullName}</Typography>
                                    <br/>
                                    <Typography >About Me: {props?.profile?.aboutMe}</Typography>
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