import React from "react";
import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Grid,
    makeStyles,
    Typography
} from "@material-ui/core";
import {red} from "@material-ui/core/colors";


const useStyles = makeStyles({
    root: {
        backgroundColor: "#2d3436"
    },


    avatar: {
        width: 60,
        height: 60
    }
});



const Users = (props) => {
    const classes = useStyles();


    const users = props.users.map(u => {
        return(
            <Grid item xs={12} sm={4} >
                <Card className={classes.root}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" alt={u.fullName} className={classes.avatar} src={u.photoURL}/>
                        }

                        title={<Typography variant="h5" >
                            {u.fullName}
                        </Typography>}
                        subheader={<Typography variant="subtitle1" >
                            {`${u.location.country}, ${u.location.city}`}
                        </Typography>}
                    />

                    <CardContent>
                        <Typography variant="body1"  component="p">
                            {u.status}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        {u.followed ?  <Button onClick={() => {
                            props.onUserUnFollowP(u.id);
                        }} variant={"outlined"} color={"secondary" }>Unfollow</Button> : <Button onClick={() => {
                            props.onUserFollow(u.id);
                        }} variant={"contained"} color={"primary" }>Follow</Button>}
                    </CardActions>
                </Card>
            </Grid>
        )
    })


    return (
        <Grid container spacing={1}>
            {users}
        </Grid>
    )
}


export default Users;