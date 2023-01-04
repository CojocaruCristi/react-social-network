import React from "react";
import Profile from './Profile';
import {connect} from "react-redux";
import {setProfileLoading, setUserProfile} from "../../Redux/Reduсers/profile-reducer";
import {withRouter} from "react-router-dom";
import {ProfileApi} from "../../api/api";


class ProfileContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = 7748;
        }
        this.props.setProfileLoading()
        ProfileApi.getProfileById(userId).then(data => {
            this.props.setUserProfile({...data});
            this.props.setProfileLoading();
        });
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
})

export default connect(mapDispatchToProps, {
    setUserProfile,
    setProfileLoading,
})(withRouter(ProfileContainer));