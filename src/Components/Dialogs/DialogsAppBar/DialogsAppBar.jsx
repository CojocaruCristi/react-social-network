import React, {useState} from "react";
import {AppBar, Drawer, Grid, IconButton, Toolbar, Typography} from "@material-ui/core";
import ContactsIcon from "@material-ui/icons/Contacts";
import ContactsList from "./ContactsList";



const DialogsAppBar = (props) => {

    const [state, setState] = useState(false);

    const toggleDrower = (open) => (event) => {
        setState(open);
    }


    return(
        <Grid item xs={12}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton onClick={toggleDrower(true)} edge="start" color="inherit" aria-label="menu">
                        <ContactsIcon />
                    </IconButton>
                    <Drawer anchor={"bottom"} open={state} onClose={toggleDrower(false)}>
                        {ContactsList(props.contactsList)}
                    </Drawer>
                    <Typography variant="h6">
                        Dialogs
                    </Typography>
                </Toolbar>
            </AppBar>
        </Grid>
    )
}


export default DialogsAppBar;