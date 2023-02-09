import React from "react";
import {Link} from "react-router-dom";
import {Avatar, List, ListItem, ListItemIcon, ListItemText, makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    listItem: {
        color: "#3C3C3C",

    }
})
const Contact = (props) => {
    const classes = useStyles();
    return (
        <Link to={`/dialogs/${props.id}`}>
            <ListItem button>
                <ListItemIcon> <Avatar alt={props.name} src="/ava"/> </ListItemIcon>
                <ListItemText className={classes.listItem} >{props.name}</ListItemText>
            </ListItem>
        </Link>
    )
}




const ContactsList = (props) => {

    const contacts = props.map(el => {
        return(
            <Contact name={el.name} id={el.id} key={el.id} />
        )
    })

    return (
        <List button key={"text"}>
            {contacts}
        </List>
    )
}


export default ContactsList;