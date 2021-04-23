import React from "react";
import {Link} from "react-router-dom";
import {Avatar, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";

const Contact = (props) => {
    return (
        <Link to={`/dialogs/${props.id}`}>
            <ListItem button>
                <ListItemIcon> <Avatar alt={props.name} src="/ava"/> </ListItemIcon>
                <ListItemText>{props.name}</ListItemText>
            </ListItem>
        </Link>
    )
}




const ContactsList = (props) => {

    const contacts = props.map(el => {
        return(
            <Contact name={el.name} id={el.id} />
        )
    })

    return (
        <List button key={"text"}>
            {contacts}
        </List>
    )
}


export default ContactsList;