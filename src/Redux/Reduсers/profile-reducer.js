import {ProfileApi} from "../../api/api";

const ADD_POST = "ADD-POST";
const CHANGE_POST_FIELD = "CHANGE-POST-FIELD";
const SET_PROFILE = "SET_PROFILE";
const PROFILE_LOADING = "PROFILE_LOADING";
const SET_PROFILE_STATUS = "SET_PROFILE_STATUS";
const SET_STATUS_LOADING = "SET_STATUS_LOADING";

const initialState = {
    profile: {
        fullName: "Cristian Cojocaru",
        photos: {},
        dateOfBirth: "17 November",
        aboutMe: '',
        city: "Chisinau",
        education: "CEEE",
        webSite: null,
        userId: null,
        lookingForAJob: null,
        lookingForAJobDescription: null,
        contacts: {},
    },
    isProfileLoading: false,
    postsData: {
        posts: [
            {id: 1, post: "Hey, why nobody loves me?"},
            {id: 2, post: "Be who you were created to be, and you will set the world on fire."},
            {id: 3, post: "I am learning react + redux + MUI"}
        ],
        postField: ""
    },
    isStatusLoading: false,
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {

            // Checking if the post field is empty, then posting is canceled
            if (!state.postsData.postField.replace(/\s/g, '').length) {
                return state;
            }

            return {
                ...state,
                postsData: {
                    ...state.postsData,
                    posts: [...state.postsData.posts, {id: 5, post: state.postsData.postField}],
                    postField: ""
                }

            };
        }
        case CHANGE_POST_FIELD: {
            return {
                ...state,
                postsData: {
                    ...state.postsData,
                    postField: action.postText
                }
            };
        }
        case SET_PROFILE: {
            return {
                ...state,
                profile: {
                    fullName: action.profile.fullName,
                    photos: action.profile.photos,
                    userId: action.profile.userId,
                    lookingForAJob: action.profile.lookingForAJob,
                    lookingForAJobDescription: action.profile.lookingForAJobDescription,
                    contacts: action.profile.contacts
                },
            }
        }
        case PROFILE_LOADING: {
            return {
                ...state,
                isProfileLoading: !state.isProfileLoading
            }
        }
        case SET_PROFILE_STATUS: {
            return {
                ...state,
                profile: {
                    ...state.profile,
                    aboutMe: action.status,

                }
            }
        }

        case SET_STATUS_LOADING: {
            return {
                ...state,
                isStatusLoading: action.isLoading
            }
        }
        default: {
            return state;
        }
    }

}

//action creators ----->

export const setProfileLoading = () => ({
    type: PROFILE_LOADING,
})

export const setUserProfile = (profile) => ({
    type: SET_PROFILE,
    profile
})

export const addPostActionCreator = () => {
    return(
        {
            type: ADD_POST
        }
    )
}

export const changePostFieldActionCreator = (postText) => {
    return(
        {
            type: CHANGE_POST_FIELD,
            postText

        }
    )
}

export const setProfileStatus = (status) => ({
    type: SET_PROFILE_STATUS,
    status,
})

export const setStatusLoading = (isLoading) => ({
    type: SET_STATUS_LOADING,
    isLoading,
})


//thunk creators ----->



export const getProfileStatusThunkCreator = (userId, dispatch) => () => {
    dispatch(setStatusLoading(true));
    ProfileApi.getProfileStatus(userId).then((data) => {
        dispatch(setProfileStatus(data));
        dispatch(setStatusLoading(false));
    })

}

export const updateProfileStatusThunkCreator = (status) => (dispatch) => {
    dispatch(setStatusLoading(true));
    ProfileApi.updateProfileStatus(status).then(data => {
        dispatch(setProfileStatus(data));
        dispatch(setStatusLoading(false));
    })
}

export const getProfileByIdThunkCreator = (profileId) => (dispatch) => {

    dispatch(setProfileLoading())
    ProfileApi.getProfileById(profileId).then(data => {
        dispatch(setUserProfile({...data}));
        dispatch(setProfileLoading());
        getProfileStatusThunkCreator(profileId, dispatch)();
    });

}
export default profileReducer;
