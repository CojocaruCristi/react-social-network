import React from "react";
import {Link} from "react-router-dom";
import {Avatar, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";

const Contact = (props) => {
    return (
        <Link to={`/dialogs/${props.name}`}>
            <ListItem button>
                <ListItemIcon> <Avatar alt={props.name} src="/ava"/> </ListItemIcon>
                <ListItemText>{props.name}</ListItemText>
            </ListItem>
        </Link>
    )
}


const ContactsList = () => {
    return (
        <List button key={"text"}>
            <Contact name={"Valera"}/>
            <Contact name={"Ghena"}/>
            <Contact name={"Mike"}/>
            <Contact name={"Cristina"}/>
            <Contact name={"Pavel"}/>
            <Contact name={"Vadim"}/>
        </List>
    )
}


export default ContactsList;