import React from "react";
import Profile from './Profile';
import {connect} from "react-redux";
import {getProfileByIdThunkCreator} from "../../Redux/Reduсers/profile-reducer";
import {withRouter} from "react-router-dom";
import withRedirect from "../../hoc/withRedirect";


class ProfileContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = 7748;
        }

        this.props.getProfileByIdThunkCreator(userId);
    }


    render() {
        return (
            <Profile {...this.props} />
        )
    }
}

const mapDispatchToProps = (state) => ({
    profile: state.profileData.profile,
    isProfileLoading: state.profileData.isProfileLoading,
    isAuth: state.authData.isAuth,
})


const WithRedirectProfile = withRedirect(ProfileContainer);

export default connect(mapDispatchToProps, {
    getProfileByIdThunkCreator,

})(withRouter(WithRedirectProfile));