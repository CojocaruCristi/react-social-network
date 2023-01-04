import profileReducer from "./Reduсers/profile-reducer";
import dialogReducer from "./Reduсers/dialogs-reducer";
import {combineReducers, createStore} from "redux";
import usersReducer from "./Reduсers/users-reducer";
import authReducer from "./Reduсers/auth-reducer";


const reducers = combineReducers({
    profileData: profileReducer,
    dialogsData: dialogReducer,
    usersData: usersReducer,
    authData: authReducer,
})


const store =  createStore(reducers);

window.store = store;

export default store;