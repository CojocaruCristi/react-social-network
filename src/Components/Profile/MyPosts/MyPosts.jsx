import React from "react";
import {Grid, Typography} from "@material-ui/core";
import Post from "./Post/Post";
import Skeleton from "@mui/material/Skeleton";
import PostForm from "./PostForm";




const MyPosts = (props) => {

    console.log('my posts props====>', props);

    const posts = props.posts.map((post) => {
        return (
            <Post profile={props.profile} com={post.post} id={post.id}/>
        )
    }).reverse();


    const onAddPost = (data) => {
        props.addPost(data.postMessage);
    }



    return (
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant={"h4"}> {!props.match.params.userId && 'My'} Posts</Typography>
                    {!props.match.params.userId && <PostForm onSubmit={onAddPost} />}
                </Grid>
            </Grid>

            <Grid container direction={"column"}>
                {
                    props.isProfileLoading ? (
                            <Grid item sx={{ width: 300 }} spacing={2}>
                                <Skeleton />
                                <Skeleton animation="wave" />
                                <Skeleton animation={false} />
                            </Grid>
                        )
                        :
                    posts
                }
            </Grid>
        </div>
    )
}


export default MyPosts;