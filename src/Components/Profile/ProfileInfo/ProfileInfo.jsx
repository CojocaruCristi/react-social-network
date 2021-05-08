import React from "react";
import {Avatar, Grid, makeStyles, Typography} from "@material-ui/core";



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
                <Grid item>
                    <Avatar variant={"square"} alt={props.profileInfo.userName} src={props.profileInfo.avatar} style={{height: 200, width: 200}}/>
                </Grid>
                <Grid item>
                    <Typography variant={"h5"} >{props.profileInfo.userName}</Typography>
                    <br/>
                    <Typography >Date of Birth: {props.profileInfo.dateOfBirth}</Typography>
                    <Typography >City: {props.profileInfo.city}</Typography>
                    <Typography>Education: {props.profileInfo.education}</Typography>
                    <Typography>Web Site: {props.profileInfo.webSite}</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ProfileInfo;