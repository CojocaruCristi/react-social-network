import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followActionCreator, setUsersActionCreator, unFollowActionCreator, changeCurrentPageAC, loadingUsersAC, loadingUserActionAC} from "../../Redux/Reduсers/users-reducer";
import {UsersApi} from "../../api/api";

class UserContainerComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.setLoadingUsers(true);
        UsersApi.getUsers(this.props.items, this.props.currentPage).then(data => this.props.onSetUsers({...data}));
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.currentPage !== this.props.currentPage) {
            this.props.setLoadingUsers(true);
            UsersApi.getUsers(this.props.items, this.props.currentPage).then(data => this.props.onSetUsers({...data}));

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
        loadingUserAction: state.usersData.loadingUserAction
    }
}


const UsersContainer = connect(mapStateToProps, {
    onUserFollow: followActionCreator,
    onUserUnFollowP: unFollowActionCreator,
    onSetUsers: setUsersActionCreator,
    changeCurrentPage: changeCurrentPageAC,
    setLoadingUsers: loadingUsersAC,
    setLoadingUserAction: loadingUserActionAC,
})(UserContainerComponent);

export default UsersContainer;