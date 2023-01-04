const SET_MY_PROFILE = "SET_MY_PROFILE";
const SET_USER_AVATAR = "SET_USER_AVATAR";

const initialState = {
    login: null,
    email: null,
    userId: null,
    photo: null,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_MY_PROFILE: {
            return {
                ...state,
                userId: action.userId,
                email: action.email,
                login: action.login,
                isAuth: true,

            }
        }

        case SET_USER_AVATAR: {
            return {
                ...state,
                photo: action.avatar,
            }
        }

        default: {
            return state;
        }
    }

}


export const setUserProfile = (userId, email, login) => ({
    type: SET_MY_PROFILE,
    userId,
    email,
    login,
})

export const setUserAvatar = (avatar) => ({
    type: SET_USER_AVATAR,
    avatar
})

export default authReducer;
