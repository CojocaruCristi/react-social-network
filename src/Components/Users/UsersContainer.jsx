import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followActionCreator, setUsersActionCreator, unFollowActionCreator, changeCurrentPageAC, loadingUsersAC} from "../../Redux/Reduсers/users-reducer";



const mapStateToProps = (state) => {
    return {
        users: state.usersData.users,
        currentPage: state.usersData.currentPage,
        totalPages: state.usersData.totalPages,
        items: state.usersData.items,
        loadingUsers: state.usersData.loadingUsers,
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
        onSetUsers: (data) => {
            dispatch(setUsersActionCreator(data));
        },
        changeCurrentPage: (page) => {
            dispatch(changeCurrentPageAC(page))
        },
        setLoadingUsers: (isLoading) => {
            dispatch(loadingUsersAC(isLoading))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;