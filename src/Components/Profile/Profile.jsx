import React from "react";
import {Grid} from "@material-ui/core";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {

    return(
        <Grid container direction={"column"} >
            <ProfileInfo {...props} />
            <MyPostsContainer />

        </Grid>

    )
}

export default Profile;