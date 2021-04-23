import React from "react";
import ProfileInfo from "./ProfileInfo";
import {connect} from "react-redux";



const mapStateToProps = (state) => {
    return {
        profileInfo: state.profileData.profileInfo
    }
}

const ProfileInfoContainer = connect(mapStateToProps, null )(ProfileInfo);

export default ProfileInfoContainer;