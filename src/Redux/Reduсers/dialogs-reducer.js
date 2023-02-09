
const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";


const initialState = {
    contactsList: [
        {id: 1, name: "Valera"},
        {id: 2, name: "Ghena"},
        {id: 3, name: "Mike"},
        {id: 4, name: "Cristina"},
        {id: 5, name: "Pavel"},
        {id: 6, name: "Vadim"}
    ],
    messages: {
        myMessages: [
            "consectetur adipiscing elit. Ut eget hendrerit augue, ac vestibulum augue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget hendrerit augue, ac vestibulum augue.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget hendrerit augue, ac vestibulum augue.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "ac vestibulum augue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget hendrerit augue, ac vestibulum augue.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        ],
        hisMessages: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget hendrerit augue, ac vestibulum augue. Proin vel convallis purus.",
            "Quisque facilisis arcu sed lacus pretium luctus."
        ],
    }
}

const dialogReducer = (state = initialState, action) => {


    switch (action.type) {
        case ADD_NEW_MESSAGE: {

            return {
                 ...state,
                messages: {
                     ...state.messages,
                    myMessages: [...state.messages.myMessages, action.message],
                 }
            };
        }
        default: {
            return state;
        }
    }

}



export const addNewMessageActionCreator = (message) => {
    return(
        {
            type: ADD_NEW_MESSAGE,
            message,
        }
    )
}




export default dialogReducer;