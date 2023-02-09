import React from "react";
import MyPosts from "./MyPosts";
import {addPostActionCreator} from "../../../Redux/Reduсers/profile-reducer";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";


const mapStateToProps = (state) => {
    return {
        posts: state.profileData.postsData.posts,
        profile: state.profileData.profile,
        postField: state.profileData.postsData.postField,
        isProfileLoading: state.profileData.isProfileLoading,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (postMessage) => {
            dispatch(addPostActionCreator(postMessage));
        },
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(MyPosts);