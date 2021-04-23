import React from "react";
import { Grid, makeStyles} from "@material-ui/core";
import HisMessage from "../MessagesComponents/HisMessage";
import MyMessage from "../MessagesComponents/MyMessage";
import MessageInput from "./MessageInput";


const useStyles = makeStyles({
    messagingContainer: {
        backgroundColor: "#2C3A47",
        minHeight: "80vh",
    },
    containerMessages: {
        maxHeight: "68vh",
        overflow: "auto",
    }
})


const MessagingCom = (props) => {

    const classes = useStyles();

    const hisMessages = props.hisMessages.map( m => {
        return(
            <HisMessage message={m} />
        )
    })
    const myMessages = props.myMessages.map( m => {
        return(
            <MyMessage message={m} />
        )
    })


    return(
        <Grid container className={classes.messagingContainer} direction={"column"} justify={"flex-end"}>

            <Grid item className={classes.containerMessages} >
                {hisMessages}
                {myMessages}
            </Grid>

           <MessageInput messageField={props.messageField}
                         changeMessageField={props.changeMessageField}
                         addMessage={props.addMessage}
           />

        </Grid>
    )
}


export default MessagingCom;