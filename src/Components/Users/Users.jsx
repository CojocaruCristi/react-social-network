import React, {useEffect} from "react";
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
    Typography,
} from "@material-ui/core";
import {red} from "@material-ui/core/colors";
import axios from "axios";
import Pagination from '@mui/material/Pagination';
import Skeleton from '@mui/material/Skeleton';


const useStyles = makeStyles({
    root: {
        backgroundColor: "#2d3436"
    },


    avatar: {
        width: 60,
        height: 60
    }
});


class Users extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.setLoadingUsers(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.items}&page=${this.props.currentPage}`)
            .then(response => response.data).then(data => this.props.onSetUsers({...data}));
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.currentPage !== this.props.currentPage) {
            this.props.setLoadingUsers(true);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.items}&page=${this.props.currentPage}`)
                .then(response => response.data).then(data => this.props.onSetUsers({...data}));

        }
    }


    onPageChange(page, value) {
            this.props.changeCurrentPage(value);
    }


    render() {

        return (
            <Grid container spacing={1}>
                {
                    this.props.loadingUsers  ?
                        (
                            <div
                            style={{
                                width: '100%',
                                display: 'flex',
                                alignSelf: 'center',
                                justifyContent: 'space-around',
                                flexWrap: "wrap"
                            }}
                            >
                                {
                                    Array.apply(null, Array(18)).map(el => (
                                        <Grid item style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginBottom: 10,
                                        }} xs={12} sm={4}>
                                            <Skeleton variant="rectangular" width={210} height={118} />
                                            <Skeleton width="40%" />
                                            <Skeleton width="30%" />
                                        </Grid>
                                    ))
                                }
                            </div>

                        )
                        :

                    this.props.users.map(u => {
                    return (
                        <Grid item xs={12} sm={4}>
                            <Card
                                style={{
                                    backgroundColor: "#2d3436"
                                }}
                            >
                                <CardHeader
                                    avatar={
                                        <Avatar aria-label="recipe" alt={u.name} style={{
                                            width: 60,
                                            height: 60
                                        }
                                        } src={u?.photos?.small}/>
                                    }

                                    title={<Typography variant="h5">
                                        {u.name}
                                    </Typography>}
                                    subheader={<Typography variant="subtitle1">
                                        {`${u?.location?.country || ''} ${u?.location?.city || ''}`}
                                    </Typography>}
                                />

                                <CardContent>
                                    <Typography variant="body1" component="p">
                                        {u.status}
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                    {u.followed ? <Button onClick={() => {
                                            this.props.onUserUnFollowP(u.id);
                                        }} variant={"outlined"} color={"secondary"}>Unfollow</Button> :
                                        <Button onClick={() => {
                                            this.props.onUserFollow(u.id);
                                        }} variant={"contained"} color={"primary"}>Follow</Button>}
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                })}
                <div style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 10,
                    alignSelf: 'bottom'
                }}>
                    <Pagination count={this.props.totalPages}
                                page={this.props.currentPage}
                                onChange={(event, value) => this.onPageChange(event, value)}
                    />
                </div>
            </Grid>
        )
    }
}


export default Users;