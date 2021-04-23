import React from "react";
import {Avatar, Box, Grid, makeStyles} from "@material-ui/core";



const useStyles = makeStyles({
    hisMessage: {
        background: "#087E8B",
        padding:15,
        borderRadius: "0px 10px 10px 30px",
        marginLeft: 5
    },
    messageC: {
        maxWidth: "80%",
        padding: 5,
        margin: 10
    },


})


const HisMessage = (props) => {

    const classes = useStyles();

    return(
        <Grid container justify={"flex-start"} xs={12} >
            <Box display={"flex"} className={classes.messageC}>
                <Avatar src={"sdfa"} alt={"Nick"} />
                <Box boxShadow={3} className={classes.hisMessage}>
                    {props.message}
                </Box>
            </Box>
        </Grid>
    )
}



export default HisMessage;