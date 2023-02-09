import React from "react";
import {Grid} from "@material-ui/core";
import MessageForm from "./MessageForm";

const MessageInput = (props) => {



    const OnAddMessage = (data, ) => {
        props.addMessage(data.message);
    }

    return(
        <Grid item >

            <MessageForm onSubmit={OnAddMessage} />

        </Grid>
    )
}

export default MessageInput;