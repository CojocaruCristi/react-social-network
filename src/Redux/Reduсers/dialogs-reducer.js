
const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";
const CHANGE_MESSAGE_FIELD = "CHANGE-MESSAGE-FIELD";


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
        messageField: ""
    }
}

const dialogReducer = (state = initialState, action) => {


    switch (action.type) {
        case ADD_NEW_MESSAGE: {

            // Checking if the message field is empty, then messaging is canceled
            if (!state.messages.messageField.replace(/\s/g, '').length) {
                return state;
            }

            return {
                 ...state,
                messages: {
                     ...state.messages,
                    myMessages: [...state.messages.myMessages, state.messages.messageField],
                    messageField: "",
                 }
            };
        }
        case CHANGE_MESSAGE_FIELD: {
            return {
                ...state,
                messages: {...state.messages, messageField: action.messageText}
            };
        }
        default: {
            return state;
        }
    }

}



export const addNewMessageActionCreator = () => {
    return(
        {
            type: ADD_NEW_MESSAGE
        }
    )
}


export const changeMessageFieldActionCreator = (messageText) => {
    return(
        {
            type: CHANGE_MESSAGE_FIELD,
            messageText
        }
    )
}





export default dialogReducer;