import React from "react";
import {Grid} from "@material-ui/core";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfoContainer from "./ProfileInfo/ProfileInfo";
import Profile from './Profile';
import {connect} from "react-redux";
import {setProfileLoading, setUserProfile} from "../../Redux/Reduсers/profile-reducer";
import axios from "axios";
import {withRouter} from "react-router-dom";



class ProfileContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('----------------->', this.props)
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = 7748;
        }
        this.props.setProfileLoading()
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => response.data).then(data => {
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