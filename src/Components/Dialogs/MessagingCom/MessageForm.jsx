import React from 'react';
import { useForm } from 'react-hook-form';
import {FormControl, IconButton, InputAdornment, makeStyles, OutlinedInput} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

const useStyles = makeStyles({
    messageInput: {
        maxHeight: 150,
        minHeight: "20%",
    }

})


const MessageForm = (props) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const classes = useStyles();

    return(
        <form onSubmit={(event) => {
            event.preventDefault();
            handleSubmit(props.onSubmit)();
            reset();
        }}>
            <FormControl variant="outlined" placeholder={"Write a message"} fullWidth >
                <OutlinedInput
                    className={classes.messageInput}
                    placeholder={"Write a message"}
                    multiline
                    rows={4}
                    {...register('message', {required: true})}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                edge="end"
                                type={'submit'}
                            >
                                <SendIcon color={"primary"} />
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
        </form>
    )
}


export default MessageForm;