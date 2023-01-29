import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
    isAuth: state.authData.isAuth,
})

const withRedirect = (Component) => {

    class WrapperComponent extends React.Component {
        render() {
            if (!this.props.isAuth) {
                return <Redirect to={'/login'} />
            }
            return <Component {...this.props} />
        }
    }

    return connect(mapStateToProps, null)(WrapperComponent);
}


export default withRedirect;