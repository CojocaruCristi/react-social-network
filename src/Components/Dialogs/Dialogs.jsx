import React from "react";
import {Grid} from "@material-ui/core";
import DialogsAppBar from "./DialogsAppBar/DialogsAppBar";
import MessagingComContainer from "./MessagingCom/MessagingComContainer";
import DialogsAppBarContainer from "./DialogsAppBar/DialogsAppBarContainer";






const Dialogs = (props) => {

    return (
        <Grid container>

            <DialogsAppBarContainer />

            <MessagingComContainer/>

        </Grid>
    )
}

export default Dialogs;