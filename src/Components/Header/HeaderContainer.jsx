import React from "react";
import {connect} from "react-redux";
import {
    authMeThunkCreator,
    getProfileByIdThunkCreator, logOutThunkCreator,
} from "../../Redux/Reduсers/auth-reducer";
import Header from "./Header";
import {compose} from "redux";
class HeaderContainer extends React.Component {
    constructor(props) {
        super(props);
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.isAuth !== this.props.isAuth) {
            this.props.getProfileByIdThunkCreator(this.props.userId);
        }
    }


    render() {
        return(
            <Header {...this.props} />
        )
    }
}

const mapStateToProps = (state) => ({...state.authData})



export default compose(
    connect(mapStateToProps, {
        authMeThunkCreator,
        getProfileByIdThunkCreator,
        logOut: logOutThunkCreator,
    })
)(HeaderContainer);