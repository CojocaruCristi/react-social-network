import React, {useState} from "react";
import {
    AppBar, Avatar, Box, Drawer, FormControl,
    Grid, IconButton, InputAdornment,
    makeStyles, OutlinedInput,
    Toolbar,
    Typography
} from "@material-ui/core";
import ContactsIcon from '@material-ui/icons/Contacts';
import ContactsList from "./ContactsList";
import SendIcon from '@material-ui/icons/Send';



const useStyles = makeStyles({
    messagingContainer: {
        backgroundColor: "#2C3A47",
        minHeight: "80vh",
    },
    messageInput: {
        maxHeight: 150,
        minHeight: "20%"
    },
    containerMessages: {
        maxHeight: "68vh",
        overflow: "auto",
        // border: "2px red solid"
    },
    messageC: {
        maxWidth: "80%",
        padding: 5,
        margin: 10
    },
    myMessage: {
        background: "#087E8B",
        padding:15,
        borderRadius: "10px 0px 30px 10px",
        marginRight: 5

    },
    hisMessage: {
        background: "#087E8B",
        padding:15,
        borderRadius: "0px 10px 10px 30px",
        marginLeft: 5
    }


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


const Dialogs = () => {
    const classes = useStyles();

    const [state, setState] = useState(false);

    const toggleDrower = (open) => (event) => {
        setState(open);
    }

    return (
        <Grid container>
            <Grid item xs={12}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton onClick={toggleDrower(true)} edge="start" color="inherit" aria-label="menu">
                            <ContactsIcon />
                        </IconButton>
                        <Drawer anchor={"bottom"} open={state} onClose={toggleDrower(false)}>
                            {ContactsList()}
                        </Drawer>
                        <Typography variant="h6">
                            Dialogs
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Grid>

            <Grid container className={classes.messagingContainer} direction={"column"} justify={"flex-end"}>

                <Grid item className={classes.containerMessages} >
                    <HisMessage message={"ac vestibulum augue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget hendrerit augue, ac vestibulum augue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget hendrerit augue, ac vestibulum augue.Lorem ipsum dolor sit amet, consectetur adipiscing elit."} />
                    <HisMessage message={" consectetur adipiscing elit. Ut eget hendrerit augue, ac vestibulum augue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget hendrerit augue, ac vestibulum augue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget hendrerit augue, ac vestibulum augue."} />
                    <MyMessage message={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget hendrerit augue, ac vestibulum augue. Proin vel convallis purus. In hendrerit ut odio et elementum. Nullam viverra ligula ac turpis maximus, eget rutrum mauris vulputate. Quisque facilisis arcu sed lacus pretium luctus. Praesent aliquet dapibus lectus, et scelerisque mi malesuada eget. Sed sit amet risus a nisi ultricies mollis vel sit amet magna. In hac habitasse platea dictumst."}/>
                    <HisMessage message={" consectetur adipiscing elit. Ut eget hendrerit augue, ac vestibulum augue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget hendrerit augue, ac vestibulum augue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget hendrerit augue, ac vestibulum augue."} />
                    <HisMessage message={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget hendrerit augue, ac vestibulum augue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget hendrerit augue, ac vestibulum augue."} />
                    <HisMessage message={"ac vestibulum augue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget hendrerit augue, ac vestibulum augue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget hendrerit augue, ac vestibulum augue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget hendrerit augue, ac vestibulum augue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget hendrerit augue, ac vestibulum augue."} />
                    <MyMessage message={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget hendrerit augue, ac vestibulum augue. Proin vel convallis purus. In hendrerit ut odio et elementum. Nullam viverra ligula ac turpis maximus, eget rutrum mauris vulputate. Quisque facilisis arcu sed lacus pretium luctus. Praesent aliquet dapibus lectus, et scelerisque mi malesuada eget. Sed sit amet risus a nisi ultricies mollis vel sit amet magna. In hac habitasse platea dictumst."}/>
                    <MyMessage message={"Quisque facilisis arcu sed lacus pretium luctus. Praesent aliquet dapibus lectus, et scelerisque mi malesuada eget. Sed sit amet risus a nisi ultricies mollis vel sit amet magna. In hac habitasse platea dictumst."}/>

                </Grid>

                <Grid item xs={12}>
                    <FormControl variant="outlined" placeholder={"Write a message"} fullWidth >
                        <OutlinedInput
                            className={classes.messageInput}
                            placeholder={"Write a message"}
                            multiline
                            rows={4}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        edge="end"
                                    >
                                        <SendIcon color={"primary"} />
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>

                </Grid>
            </Grid>

        </Grid>
    )
}

export default Dialogs;