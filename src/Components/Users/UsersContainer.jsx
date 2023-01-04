import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followActionCreator, setUsersActionCreator, unFollowActionCreator, changeCurrentPageAC, loadingUsersAC} from "../../Redux/Reduсers/users-reducer";
import axios from "axios";




class UserContainerComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.setLoadingUsers(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.items}&page=${this.props.currentPage}`, {
            withCredentials: true,
        })
            .then(response => response.data).then(data => this.props.onSetUsers({...data}));
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.currentPage !== this.props.currentPage) {
            this.props.setLoadingUsers(true);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.items}&page=${this.props.currentPage}`, {
                withCredentials: true,
            })
                .then(response => response.data).then(data => this.props.onSetUsers({...data}));

        }
    }





    render() {

        return <Users {...this.props} />
    }
}



const mapStateToProps = (state) => {
    return {
        users: state.usersData.users,
        currentPage: state.usersData.currentPage,
        totalPages: state.usersData.totalPages,
        items: state.usersData.items,
        loadingUsers: state.usersData.loadingUsers,
    }
}


const UsersContainer = connect(mapStateToProps, {
    onUserFollow: followActionCreator,
    onUserUnFollowP: unFollowActionCreator,
    onSetUsers: setUsersActionCreator,
    changeCurrentPage: changeCurrentPageAC,
    setLoadingUsers: loadingUsersAC,
})(UserContainerComponent);

export default UsersContainer;