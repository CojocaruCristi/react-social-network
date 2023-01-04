const FOLLOW = "FOLLOW";
const UN_FOLLOW = "UN_FOLLOW";
const SET_USERS = "SET_USERS";
const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE';
const SET_LOADING_USERS = 'SET_LOADING_USERS';
const SET_USER_LOADING_ACTION = 'SET_USER_LOADING_ACTION';
const initialState = {
    users: [],
    // page: 1,
    items: 20,
    totalPages: 0,
    currentPage: 1,
    loadingUsers: false,
    loadingUserAction: {
        isLoading: false,
        userId: null,
    },
}


const usersReducer = (state = initialState, action) => {

    switch (action.type){
        case FOLLOW: {
            return {
                ...state,
                loadingUserAction: {
                    isLoading: false,
                    userId: null,
                },
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
                loadingUserAction: {
                    isLoading: false,
                    userId: null,
                },
                users: state.users.map( (u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        }
        case SET_USERS: {
            console.log(action)
            return {
                ...state,
                // users: [...state.users, ...action.users]
                users: action.data.items,
                totalPages: Math.ceil(action.data.totalCount / state.items),
                loadingUsers: false,
            }
        }
        case CHANGE_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.page
            }
        }

        case SET_LOADING_USERS: {
            return {
                ...state,
                loadingUsers: action.isLoading,
            }
        }

        case SET_USER_LOADING_ACTION: {
            return {
                ...state,
                loadingUserAction: {
                    isLoading: action.isLoading,
                    userId: action.userId,
                },
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

export const setUsersActionCreator = (data) => {
    return {
        type: SET_USERS,
        data
    }
}

export const changeCurrentPageAC = (page) => {
    return {
        type: CHANGE_CURRENT_PAGE,
        page
    }
}

export const loadingUsersAC = (isLoading) => {
    return {
        type: SET_LOADING_USERS,
        isLoading,
    }
}

export const loadingUserActionAC = (isLoading, userId) => {
    return {
        type: SET_USER_LOADING_ACTION,
        isLoading,
        userId,
    }
}

export default usersReducer;




