import React from "react";
import {Divider, List, ListItem, ListItemIcon, ListItemText, makeStyles} from "@material-ui/core";
import {Link} from "react-router-dom";
import PersonIcon from '@material-ui/icons/Person';
import MessageIcon from '@material-ui/icons/Message';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import SettingsIcon from '@material-ui/icons/Settings';
import GroupIcon from '@material-ui/icons/Group';

const useStyles = makeStyles({
    listItem: {
        color: "#3C3C3C",

    }
})


const NavBar = () => {
    const classes = useStyles();
    return (
        <List button key={"text"}>
            <Link to={'/profile'}>
                <ListItem button >
                    <ListItemIcon> <PersonIcon/> </ListItemIcon>
                    <ListItemText className={classes.listItem}>PROFILE</ListItemText>
                </ListItem>
            </Link>
            <Link to={'/dialogs'}>
                <ListItem button>
                    <ListItemIcon> <MessageIcon/> </ListItemIcon>
                    <ListItemText className={classes.listItem}>DIALOGS</ListItemText>
                </ListItem>
            </Link>
            <Link to={'/users'}>
                <ListItem button>
                    <ListItemIcon> <GroupIcon/> </ListItemIcon>
                    <ListItemText className={classes.listItem}>USERS</ListItemText>
                </ListItem>
            </Link>
            <Link to={'/music'}>
                <ListItem button>
                    <ListItemIcon> <MusicNoteIcon/> </ListItemIcon>
                    <ListItemText className={classes.listItem}>MUSIC</ListItemText>
                </ListItem>
            </Link>
            <Divider/>
            <Link to={'/settings'}>
                <ListItem button>
                    <ListItemIcon> <SettingsIcon/> </ListItemIcon>
                    <ListItemText className={classes.listItem}>SETTINGS</ListItemText>
                </ListItem>
            </Link>

        </List>
    )
}

export default NavBar;