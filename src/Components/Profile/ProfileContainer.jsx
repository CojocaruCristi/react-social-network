import React, {useEffect} from "react";
import Profile from './Profile';
import {connect} from "react-redux";
import {
    changeProfileImageThunkCreator, changeProfileThunkCreator,
    getProfileByIdThunkCreator,
    getProfileStatusThunkCreator, setShouldProfileUpdate,
    updateProfileStatusThunkCreator
} from "../../Redux/Reduсers/profile-reducer";
import {withRouter} from "react-router-dom";
import withRedirect from "../../hoc/withRedirect";
import {compose} from "redux";


const ProfileContainer = (props) => {

    const geUserProfile = () => {
        let userId = props.match.params.userId;
        if(userId === 'me') {
            userId = props.authUserId;
        }

        props.getProfileByIdThunkCreator(userId);
    }

    useEffect(() => {
        if(props.shouldProfileUpdate || props.match.params.userId) {
            geUserProfile();
        }
    }, [props.shouldProfileUpdate, props.match.params.userId]);

    return (
        <Profile {...props} />
    )
}

const mapDispatchToProps = (state) => ({
    profile: state.profileData.profile,
    isProfileLoading: state.profileData.isProfileLoading,
    isStatusLoading: state.profileData.isStatusLoading,
    isProfileImageLoading: state.profileData.isProfileImageLoading,
    isProfileFormLoading: state.profileData.isProfileFormLoading,
    shouldProfileUpdate: state.profileData.shouldProfileUpdate,
    authUserId: state.authData.userId,
})



export default compose(
    connect(mapDispatchToProps,{
        getProfileByIdThunkCreator,
        getProfileStatusThunkCreator,
        updateProfileStatusThunkCreator,
        changeProfileImageThunkCreator,
        changeProfileThunkCreator,
        setShouldProfileUpdate
    }),
    withRouter,
    withRedirect
)(ProfileContainer)