import {ProfileApi} from "../../api/api";

const ADD_POST = "ADD-POST";
const CHANGE_POST_FIELD = "CHANGE-POST-FIELD";
const SET_PROFILE = "SET_PROFILE";
const PROFILE_LOADING = "PROFILE_LOADING";

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
    }
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
                profile: action.profile,
            }
        }
        case PROFILE_LOADING: {
            return {
                ...state,
                isProfileLoading: !state.isProfileLoading
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



//thunk creators ----->

export const getProfileByIdThunkCreator = (profileId) => (dispatch) => {

    dispatch(setProfileLoading())
    ProfileApi.getProfileById(profileId).then(data => {
        dispatch(setUserProfile({...data}));
        dispatch(setProfileLoading());
    });

}

export default profileReducer;
