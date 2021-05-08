const FOLLOW = "FOLLOW";
const UN_FOLLOW = "UN_FOLLOW";
const SET_USERS = "SET_USERS";


const initialState = {
    users: [
        { id: 0 , fullName: "Max", status: "Be the type of person you want to meet", followed: true, photoURL: null, location: {country: "Moldova", city: "Chisinau"}},
        { id: 1 , fullName: "Sergiu", status: "Or you’re striving toward", followed: false, photoURL: null, location: {country: "Ukraine", city: "Kiev"}},
        { id: 2 , fullName: "Sasha", status: "Whatever it is, good for you!", followed: false, photoURL: null, location: {country: "Belarus", city: "Minsk"}},
        { id: 3 , fullName: "Cristi", status: "If it makes you feel good every time you read it, you have a winner.", followed: true, photoURL: null, location: {country: "Russia", city: "Moscow"}}
    ]
}


const usersReducer = (state = initialState, action) => {

    switch (action.type){
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map( (u) => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true}
                    }
                    return u;
                } )
            }
        }
        case UN_FOLLOW: {
            return {
                ...state,
                users: state.users.map( (u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        }
        default: {
            return state;
        }
    }

}

export const followActionCreator = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}

export const unFollowActionCreator = (userId) => {
    return {
        type: UN_FOLLOW,
        userId
    }
}

export const setUsersActionCreator = (users) => {
    return {
        type: SET_USERS,
        users
    }
}

export default usersReducer;




