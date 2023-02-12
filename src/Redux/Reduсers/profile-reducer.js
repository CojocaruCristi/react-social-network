import {ProfileApi} from "../../api/api";
import {setUserAvatar} from "./auth-reducer";

const ADD_POST = "ADD-POST";
const SET_PROFILE = "SET_PROFILE";
const PROFILE_LOADING = "PROFILE_LOADING";
const SET_PROFILE_STATUS = "SET_PROFILE_STATUS";
const SET_STATUS_LOADING = "SET_STATUS_LOADING";
const SET_PROFILE_PHOTO = "profile-reducer/SET_PROFILE_PHOTO";
const SET_LOADING_PROFILE_IMAGE = "profile-reducer/SET_LOADING_PROFILE_IMAGE";
const SET_LOADING_EDIT_PROFILE_FORM = "profile-reducer/SET_LOADING_EDIT_PROFILE_FORM";
const SET_SHOULD_PROFILE_UPDATE = "profile-reducer/SET_SHOULD_PROFILE_UPDATE";

const initialState = {
    profile: {
        fullName: "Cristian Cojocaru",
        photos: {},
        aboutMe: '',
        userId: null,
        lookingForAJob: false,
        lookingForAJobDescription: '',
        contacts: {
            github: '',
            vk: '',
            facebook: '',
            instagram: '',
            twitter: '',
            website: '',
            youtube: '',
            mainLink: '',
        },
    },
    postsData: {
        posts: [
            {id: 1, post: "Hey, why nobody loves me?"},
            {id: 2, post: "Be who you were created to be, and you will set the world on fire."},
            {id: 3, post: "I am learning react + redux + MUI"}
        ],
    },
    isProfileLoading: true,
    isStatusLoading: true,
    isProfileImageLoading: false,
    isProfileFormLoading: false,
    shouldProfileUpdate: false,
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {

            return {
                ...state,
                postsData: {
                    ...state.postsData,
                    posts: [...state.postsData.posts, {id: state.postsData.posts.slice(-1).id + 1, post: action.postMessage}],
                    postField: ""
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
                isProfileLoading: action.flag,
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
        case SET_PROFILE_PHOTO: {
            return {
                ...state,
                profile: {
                    ...state.profile,
                    photos: action.photos,
                }
            }
        }
        case SET_LOADING_PROFILE_IMAGE: {
            return {
                ...state,
                isProfileImageLoading: action.flag,
            }
        }
        case SET_LOADING_EDIT_PROFILE_FORM: {
            return {
                ...state,
                isProfileFormLoading: action.flag,
            }
        }
        case SET_SHOULD_PROFILE_UPDATE: {
            return {
                ...state,
                shouldProfileUpdate: action.flag,
            }
        }
        default: {
            return state;
        }
    }

}

//action creators ----->

export const setProfileLoading = (flag) => ({
    type: PROFILE_LOADING,
    flag
})

export const setUserProfile = (profile) => ({
    type: SET_PROFILE,
    profile
})

export const addPostActionCreator = (postMessage) => {
    return(
        {
            type: ADD_POST,
            postMessage
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

export const setProfilePhoto = (photos) => ({
    type: SET_PROFILE_PHOTO,
    photos,
})

export const setLoadingProfileImage = (flag) => ({
    type: SET_LOADING_PROFILE_IMAGE,
    flag,
})

export const setLoadingEditProfileForm = (flag) => ({
    type: SET_LOADING_EDIT_PROFILE_FORM,
    flag,
})

export const setShouldProfileUpdate = (flag) => ({
    type: SET_SHOULD_PROFILE_UPDATE,
    flag,
})


//thunk creators ----->

export const changeProfileThunkCreator = (profileData) => (dispatch) => {

    dispatch(setLoadingEditProfileForm(true))
    return ProfileApi.editProfileData(profileData).then((data) => {
        dispatch(setUserProfile(data.data));
        dispatch(setLoadingEditProfileForm(false));
        dispatch(setShouldProfileUpdate(true));
    })
}

export const changeProfileImageThunkCreator = (photoFile) => (dispatch) => {
    dispatch(setLoadingProfileImage(true))
    ProfileApi.changeProfilePhoto(photoFile).then((data) => {
        if(data.resultCode === 0) {
            dispatch(setProfilePhoto(data.data.photos));
            dispatch(setUserAvatar(data.data.photos));
        }
        dispatch(setLoadingProfileImage(false))
        return data;
    })
}

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
        dispatch(setProfileStatus(data.status));
        dispatch(setStatusLoading(false));
    })
}

export const getProfileByIdThunkCreator = (profileId) => (dispatch) => {

    dispatch(setProfileLoading(true))
    ProfileApi.getProfileById(profileId).then(data => {
        dispatch(setUserProfile({...data}));
        dispatch(setProfileLoading(false));
        dispatch(setShouldProfileUpdate(false));
        getProfileStatusThunkCreator(profileId, dispatch)();
    });

}


export default profileReducer;
