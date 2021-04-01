import React, {useState} from "react";
import {
    AppBar,
    Drawer,
    IconButton,
    makeStyles,
    Toolbar,
    Typography
} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import NavBar from "../NavBar/NavBar";



const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: "30px"
    },

}));



const Header = () => {
    const classes = useStyles();

    const [state, setState] = useState(false);

    const toggleDrower = (open) => (event) => {
        setState(open);
    }

    return(
        <AppBar className={classes.root}>
            <Toolbar>
                <IconButton onClick={toggleDrower(true)} edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Drawer anchor={"left"} open={state} onClose={toggleDrower(false)}>
                    {NavBar()}
                </Drawer>
                <Typography variant="h6" >
                    React Social Network
                </Typography>
            </Toolbar>
        </AppBar>

    )
}


export default Header;