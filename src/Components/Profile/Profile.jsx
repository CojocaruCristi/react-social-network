import React from "react";
import {Avatar, Grid, makeStyles, Typography} from "@material-ui/core";
import MyPosts from "./MyPosts/MyPosts";


const useStyles = makeStyles((theme) => ({

    userContent: {
        marginBottom: 30
    }


}));


const Profile = () => {

    const classes = useStyles();

    return(
        <Grid container direction={"column"} >
            <Grid item className={classes.userContent}>
                <Grid container spacing={2}>
                    <Grid item>
                        <Avatar variant={"square"} alt={"User NickName"} src={"defaultAvatar"} style={{height: 200, width: 200}}/>
                    </Grid>
                    <Grid item>
                        <Typography variant={"h5"} >User Name</Typography>
                        <br/>
                        <Typography >Date of Birth: 2 January</Typography>
                        <Typography >City: Minsk</Typography>
                        <Typography>Education: BSU'11</Typography>
                        <Typography>Web Site: https://it-camasutra.com</Typography>
                    </Grid>
                </Grid>
            </Grid>

            <MyPosts/>
        </Grid>

    )
}

export default Profile;