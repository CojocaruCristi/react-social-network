import React from "react";
import {connect} from "react-redux";
import {setUserAvatar, setUserProfile} from "../../Redux/Reduсers/auth-reducer";
import Header from "./Header";
import {AuthApi} from "../../api/api";
import {ProfileApi} from "../../api/api";
class HeaderContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        AuthApi.authMe()
            .then(data => {
                if(data.resultCode === 0) {
                    this.props.setUserProfile(data.data.id, data.data.email, data.data.login)
                }
            })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.isAuth !== this.props.isAuth) {
            ProfileApi.getProfileById(this.props.userId)
                .then(data => {
                    this.props.setUserAvatar(data.photos);
                })
        }
    }


    render() {
        return(
            <Header {...this.props} />
        )
    }
}

const mapStateToProps = (state) => ({...state.authData})



export default connect(mapStateToProps, {
    setUserProfile,
    setUserAvatar
})(HeaderContainer);