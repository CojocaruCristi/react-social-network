import React from "react";
import DialogsAppBar from "./DialogsAppBar";
import {connect} from "react-redux";
import {compose} from "redux";


const mapStateToProps = (state) => {
    return {
        contactsList: state.dialogsData.contactsList
    }
}


export default compose(
    connect( mapStateToProps, null),
)(DialogsAppBar);