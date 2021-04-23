import React from "react";
import {FormControl, Grid, IconButton, InputAdornment, makeStyles, OutlinedInput} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
const useStyles = makeStyles({
    messageInput: {
        maxHeight: 150,
        minHeight: "20%"
    }

})



const MessageInput = (props) => {

    const classes = useStyles();

    const messageInputRef = React.createRef();

    const OnAddMessage = () => {
        props.addMessage();
    }
    const onChangeMessageField = (m) => {
        props.changeMessageField(m);
    }

    return(
        <Grid item xs={12}>
            <FormControl variant="outlined" placeholder={"Write a message"} fullWidth >
                <OutlinedInput
                    className={classes.messageInput}
                    placeholder={"Write a message"}
                    multiline
                    rows={4}
                    inputRef={messageInputRef}
                    value={props.messageField}
                    onChange={onChangeMessageField}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                edge="end"
                                onClick={OnAddMessage}
                            >
                                <SendIcon color={"primary"} />
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>

        </Grid>
    )
}

export default MessageInput;