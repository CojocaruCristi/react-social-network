import React, {useState} from "react";
import {
    AppBar, Avatar,
    Drawer,
    IconButton,
    makeStyles,
    Typography
} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import NavBar from "../NavBar/NavBar";


const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: "30px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: '10px 15px 10px 15px',
    },
    logoBlock: {
        display: "flex",
        alignItems: "center"
    },
    authBlock: {
        display: "flex",
        alignItems: "center"
    },
    avatarLogin: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    }
}));


const Header = (props) => {
    const classes = useStyles();

    const [state, setState] = useState(false);

    const toggleDrower = (open) => (event) => {
        setState(open);
    }

    return (
        <AppBar className={classes.root}>
            <div className={classes.logoBlock}>
                <IconButton onClick={toggleDrower(true)} edge="start" color="inherit" aria-label="menu">
                    <MenuIcon/>
                </IconButton>
                <Drawer anchor={"left"} open={state} onClose={toggleDrower(false)}>
                    {NavBar()}
                </Drawer>
                <Typography variant="h6">
                    React Social Network
                </Typography>
            </div>
            <div className={classes.authBlock}>
                {
                    props.isAuth ? (
                            <div className={classes.avatarLogin}>

                                <Avatar alt={props.login} src={props.photo?.small} />
                                <Typography variant="h8">
                                    {props.login}
                                </Typography>
                            </div>
                        )
                        :
                        (
                            <Typography variant="h8">
                                Login
                            </Typography>
                        )
                }
            </div>
        </AppBar>

    )
}


export default Header;