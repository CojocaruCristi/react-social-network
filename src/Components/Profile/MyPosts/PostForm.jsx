import React from 'react';
import {useForm} from "react-hook-form";
import {Box, Button, TextField, Typography} from "@material-ui/core";
import {PostAdd} from "@material-ui/icons";


const PostForm = (props) => {
    const {register, reset, handleSubmit, formState: { errors }} = useForm();

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            handleSubmit(props.onSubmit)();
            reset();
        }}>

            <TextField
                error={Boolean(errors?.postMessage?.message)}
                rows={6}
                margin={"normal"}
                fullWidth={true}
                multiline={true}
                variant={"outlined"}
                label={"Write a post"}
                style={{color: "inherit"}}
                value={props.postField}
                {...register('postMessage', {required: "Post can't be white spase or shorter than 5 characters", minLength: 5})}
                helperText={errors?.postMessage?.message}
            />

            <Box display={"flex"} justifyContent={"flex-end"}>
                <Button
                    type={'submit'}
                    startIcon={<PostAdd/>}
                    variant={"contained"}
                    size={"large"}
                    color={"primary"}>
                    Post
                </Button>
            </Box>
        </form>
    )
}


export default PostForm;