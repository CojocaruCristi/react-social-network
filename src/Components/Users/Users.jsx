import React from "react";
import {
    Avatar,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Grid,
    makeStyles,
    Typography,
} from "@material-ui/core";
import Pagination from '@mui/material/Pagination';
import Skeleton from '@mui/material/Skeleton';
import {NavLink} from "react-router-dom";
import LoadingButton from '@mui/lab/LoadingButton';
import {FollowApi} from "../../api/api";

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

    const onPageChange = (page, value) => {
        props.changeCurrentPage(value);
    }


    return (
        <Grid container spacing={1}>
            {
                props.loadingUsers  ?
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

                    props.users.map(u => {
                        return (
                            <Grid item xs={12} sm={4}>
                                <Card
                                    style={{
                                        backgroundColor: "#2d3436"
                                    }}
                                >
                                    <NavLink to={`/profile/${u.id}`} >
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
                                    </NavLink>


                                    <CardContent>
                                        <Typography variant="body1" component="p">
                                            {u.status}
                                        </Typography>
                                    </CardContent>
                                    <CardActions disableSpacing>

                                        {
                                            props.loadingUserAction.isLoading && props.loadingUserAction.userId === u.id ? (
                                                    <LoadingButton style={{
                                                        borderColor: '#087E8B',
                                                    }} color={"primary"} loading variant="outlined">
                                                    loading
                                                    </LoadingButton>
                                                )
                                                : u.followed ? <Button onClick={() => {
                                                props.setLoadingUserAction(true, u.id);
                                                FollowApi.unfollow(u.id)
                                                .then((data) => {
                                                    if(data.resultCode === 0){
                                                        props.onUserUnFollowP(u.id);
                                                    }
                                                }).catch((error) => console.log("error happened on unffollow", error))
                                            }} variant={"outlined"} color={"secondary"}>Unfollow</Button> :
                                            <Button onClick={() => {
                                                props.setLoadingUserAction(true, u.id);
                                                FollowApi.follow(u.id).then((data) => {
                                                    if(data.resultCode === 0) {
                                                        props.onUserFollow(u.id);
                                                    }
                                                }).catch((error) => console.log("error happened on follow", error))
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
                <Pagination count={props.totalPages}
                            page={props.currentPage}
                            onChange={(event, value) => onPageChange(event, value)}
                />
            </div>
        </Grid>
    )
}


export default Users;