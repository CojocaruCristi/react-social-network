import React from "react";
import DialogsAppBar from "./DialogsAppBar";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        contactsList: state.dialogsData.contactsList
    }
}

const DialogsAppBarContainer = connect( mapStateToProps, null)(DialogsAppBar);







export default DialogsAppBarContainer