import React from "react";
import MyPosts from "./MyPosts";
import {addPostActionCreator, changePostFieldActionCreator} from "../../../Redux/Reduсers/profile-reducer";
import {connect} from "react-redux";
import {compose} from "redux";


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
        addPost: () => {
            dispatch(addPostActionCreator());
            dispatch(changePostFieldActionCreator(""));
        },
        changePostField: (c) => {
            dispatch(changePostFieldActionCreator(c.target.value))

        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(MyPosts);