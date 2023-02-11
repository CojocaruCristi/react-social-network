import {authMeThunkCreator, getProfileByIdThunkCreator} from "./auth-reducer";

const SET_APP_INITIALIZED = "SET_APP_INITIALIZED";

const initialState = {
    isAppInitialized: false,
}


const appReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_APP_INITIALIZED: {
            return {
                ...state,
                isAppInitialized: true,
            }
        }

        default: {
            return state;
        }
    }

}


//action creators
export const setAppInitialized = () => ({
    type: SET_APP_INITIALIZED
})

//thunk creators

export const initializeAppThunkCreator = () => (dispatch) => {
    const promise = dispatch(authMeThunkCreator());

    promise.then((data) => {
        if(data.resultCode === 0 && data?.data?.id) {
            dispatch(getProfileByIdThunkCreator(data?.data?.id)).then(data => {
                dispatch(setAppInitialized());
            });
        }else {
            dispatch(setAppInitialized());
        }
    })

}



export default appReducer;