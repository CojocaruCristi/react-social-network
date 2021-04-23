import React from "react";
import MyPosts from "./MyPosts";
import {addPostActionCreator, changePostFieldActionCreator} from "../../../Redux/Reduсers/profile-reducer";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        posts: state.profileData.postsData.posts,
        profileInfo: state.profileData.profileInfo,
        postField: state.profileData.postsData.postField

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
            dispatch(changePostFieldActionCreator(""));
        },
        changePostField: (c) => {
            dispatch(changePostFieldActionCreator(c.target.value))

        }
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;