import React from "react";
import {Avatar, Box, Grid, makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    myMessage: {
        background: "#087E8B",
        padding:15,
        borderRadius: "10px 0px 30px 10px",
        marginRight: 5

    },
    messageC: {
        maxWidth: "80%",
        padding: 5,
        margin: 10
    },


})

const MyMessage = (props) => {
    const classes = useStyles();
    return(
        <Grid container justify={"flex-end"} xs={12} >
            <Box display={"flex"} className={classes.messageC}  >
                <Box boxShadow={3} className={classes.myMessage}>
                    {props.message}
                </Box>
                <Avatar src={"sdfa"} alt={"User Nickname"} />
            </Box>
        </Grid>
    )
}

export default MyMessage;