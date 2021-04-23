const ADD_POST = "ADD-POST";
const CHANGE_POST_FIELD = "CHANGE-POST-FIELD";


const initialState = {
    profileInfo: {
        userName: "Cristian Cojocaru",
        avatar: null,
        dateOfBirth: "17 November",
        city: "Chisinau",
        education: "CEEE",
        webSite: null
    },
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
        case ADD_POST: {;

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
        default: {
            return state;
        }
    }

}



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



export default profileReducer;
