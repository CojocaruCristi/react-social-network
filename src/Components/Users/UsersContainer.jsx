import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followActionCreator, setUsersActionCreator, unFollowActionCreator} from "../../Redux/Reduсers/users-reducer";



const mapStateToProps = (state) => {
    return {
        users: state.usersData.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onUserFollow: (userId) => {
            dispatch(followActionCreator(userId));
        },
        onUserUnFollowP: (userId) => {
            dispatch(unFollowActionCreator(userId));
        },
        onSetUsers: (users) => {
            dispatch(setUsersActionCreator());
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;