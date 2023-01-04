import React from "react";
import {connect} from "react-redux";
import {setUserAvatar, setUserProfile} from "../../Redux/Reduсers/auth-reducer";
import Header from "./Header";
import axios from "axios";


class HeaderContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            {
                withCredentials: true,
            }
            )
            .then(response => response.data)
            .then(data => {
                if(data.resultCode === 0) {
                    this.props.setUserProfile(data.data.id, data.data.email, data.data.login)
                }
            })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.isAuth !== this.props.isAuth) {
            console.log('update=================================>')
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.userId}`,
            )
                .then(response => response.data)
                .then(data => {
                    this.props.setUserAvatar(data.photos);
                })
        }
    }


    render() {
        return(
            <Header {...this.props} />
        )
    }
}

const mapStateToProps = (state) => ({...state.authData})



export default connect(mapStateToProps, {
    setUserProfile,
    setUserAvatar
})(HeaderContainer);