import React from "react";
import {Grid} from "@material-ui/core";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";


const Profile = (props) => {

    return(
        <Grid container direction={"column"} >
            <ProfileInfoContainer />
            <MyPostsContainer />

        </Grid>

    )
}

export default Profile;