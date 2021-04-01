import React from "react";
import {Box, Button, Grid, TextField, Typography} from "@material-ui/core";
import Post from "./Post/Post";
import {PostAdd} from "@material-ui/icons";


const arrString = ["Hey, why nobody loves me?", "Be who you were created to be, and you will set the world on fire.", "I am learning react + redux + MUI"];



const posts = arrString.map((el) => {
    return (
        <Post com={el} />
    )
})


const MyPosts = (props) => {
    return(
        <div>
            <Grid container >
                <Grid item xs={12} >
                    <Typography variant={"h4"}>My Posts</Typography>

                    <TextField rows={6} margin={"normal"} fullWidth={true} multiline={true}  variant={"outlined"} label={"Write a post"} style={{color: "inherit"}}/>

                    <Box display={"flex"} justifyContent={"flex-end"}>
                        <Button startIcon={<PostAdd/>} variant={"contained"} size={"large"} color={"primary"}>Post</Button>
                    </Box>
                </Grid>
            </Grid>

            <Grid container direction={"column"} >
                {posts}
            </Grid>
        </div>
    )
}


export default MyPosts;