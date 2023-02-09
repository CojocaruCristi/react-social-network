import React from "react";
import MessagingCom from "./MessagingCom";
import {addNewMessageActionCreator} from "../../../Redux/Reduсers/dialogs-reducer";
import {connect} from "react-redux";
import withRedirect from "../../../hoc/withRedirect";
import {compose} from "redux";




const mapStateToProps = (state) => {
    return {
        hisMessages: state.dialogsData.messages.hisMessages,
        myMessages: state.dialogsData.messages.myMessages,
        messageField: state.dialogsData.messages.messageField
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (message) => {
                        dispatch(addNewMessageActionCreator(message));
                    },
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRedirect
)(MessagingCom);