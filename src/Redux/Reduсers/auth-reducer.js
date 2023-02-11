import {AuthApi, ProfileApi} from "../../api/api";

const SET_MY_PROFILE = "SET_MY_PROFILE";
const SET_USER_AVATAR = "SET_USER_AVATAR";
const SET_LOGIN_LOADING = "SET_LOGIN_LOADING";
const SET_LOGOUT_LOADING = "SET_LOGOUT_LOADING";
const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE";

const initialState = {
    login: null,
    email: null,
    userId: null,
    photo: null,
    isAuth: false,
    isLogOutLoading: false,
    isLogInLoading: false,
    errorMessage: '',

}

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_MY_PROFILE: {
            return {
                ...state,
                userId: action.userId,
                email: action.email,
                login: action.login,
                isAuth: action.isAuth,

            }
        }

        case SET_USER_AVATAR: {
            return {
                ...state,
                photo: action.avatar,
            }
        }

        case SET_LOGIN_LOADING: {
            return {
                ...state,
                isLogInLoading: action.toggle,
            }
        }

        case SET_LOGOUT_LOADING: {
            return {
                ...state,
                isLogOutLoading: action.toggle,
            }
        }
        case SET_ERROR_MESSAGE: {
            return {
                ...state,
                errorMessage: action.message
            }
        }

        default: {
            return state;
        }
    }

}

//action creators ----->

export const setUserProfile = (userId, email, login, isAuth) => ({
    type: SET_MY_PROFILE,
    userId,
    email,
    login,
    isAuth
})

export const setUserAvatar = (avatar) => ({
    type: SET_USER_AVATAR,
    avatar
})

export const setIsLogInLoading = (toggle) => ({
    type: SET_LOGIN_LOADING,
    toggle,
})

export const setIsLogOutLoading = (toggle) => ({
    type: SET_LOGOUT_LOADING,
    toggle,
})

export const setErrorMessage = (message) => ({
    type: SET_ERROR_MESSAGE,
    message,
})



//thunk creators ----->

export const authMeThunkCreator = () => (dispatch) => {

    return AuthApi.authMe()
        .then(data => {
            if(data.resultCode === 0) {
                dispatch(setUserProfile(data.data.id, data.data.email, data.data.login, true));
            }else {
                dispatch(setUserProfile(null, null, null, false));
            }
            dispatch(setIsLogInLoading(false));
            dispatch(setIsLogOutLoading(false));
            return data;
        })

}

export const getProfileByIdThunkCreator = (profileId) => (dispatch) => {

    return ProfileApi.getProfileById(profileId)
        .then(data => {
            dispatch(setUserAvatar(data.photos));
            return data;
        })

}

export const loginThunkCreator = (email, password, rememberMe) => (dispatch) =>{
    dispatch(setIsLogInLoading(true));
    AuthApi.login(email, password, rememberMe).then(data => {
        if(data.resultCode === 0) {
            dispatch(authMeThunkCreator());
        }else if(data.messages.length) {
            dispatch(setErrorMessage(data.messages[0]))
            dispatch(setIsLogInLoading(false));
        }
    });
}

export const logOutThunkCreator = () => (dispatch) => {
    dispatch(setIsLogOutLoading(true))
    AuthApi.logOut().then(data => {
        if(data.resultCode === 0) {
            dispatch(authMeThunkCreator());
        }else {
            dispatch(setIsLogOutLoading(false));
        }
    })
}




export default authReducer;
