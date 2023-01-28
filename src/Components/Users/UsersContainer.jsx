import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    changeCurrentPageAC,
    getUsersThunkCreator,
    followUserThunkCreator,
    unfollowThunkCreator
} from "../../Redux/Reduсers/users-reducer";

class UserContainerComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.items, this.props.currentPage);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.currentPage !== this.props.currentPage) {
            this.props.getUsersThunkCreator(this.props.items, this.props.currentPage);

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
    changeCurrentPage: changeCurrentPageAC,
    getUsersThunkCreator,
    followUserThunkCreator,
    unfollowThunkCreator
})(UserContainerComponent);

export default UsersContainer;