import React from "react";
import {Box, Button, Grid, TextField, Typography} from "@material-ui/core";
import Post from "./Post/Post";
import {PostAdd} from "@material-ui/icons";




const MyPosts = (props) => {

    const posts = props.posts.map((post) => {
        return (
            <Post profileInfo={props.profileInfo} com={post.post} id={post.id}/>
        )
    })

    const postInputRef = React.createRef();

    const onAddPost = () => {
        props.addPost();
    }

    const OnChangePostField = (c) => {
        props.changePostField(c);

    }



    return (
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant={"h4"}>My Posts</Typography>

                    <TextField onChange={OnChangePostField} inputRef={postInputRef} rows={6} margin={"normal"} fullWidth={true} multiline={true} variant={"outlined"}
                               label={"Write a post"} style={{color: "inherit"}} value={props.postField}/>

                    <Box display={"flex"} justifyContent={"flex-end"}>
                        <Button onClick={onAddPost} startIcon={<PostAdd/>} variant={"contained"} size={"large"}
                                color={"primary"}>Post</Button>
                    </Box>
                </Grid>
            </Grid>

            <Grid container direction={"column"}>
                {posts}
            </Grid>
        </div>
    )
}


export default MyPosts;