import React from "react";
import {Avatar, Box, Grid, Typography} from "@material-ui/core";


const Post = (props) => {
    return(
        <Grid item>
            <Box display={"flex"} m={4}>
                <Avatar style={{height: 60, width: 60, marginRight: 10, "border-radius": "50%"}}
                        src={props.profile?.photos?.small} color={"primary"} alt={props.profile.fullName}/>
                <Typography>{props.com}</Typography>
            </Box>
        </Grid>
    )
}

export default Post;
