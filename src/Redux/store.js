import profileReducer from "./Reduсers/profile-reducer";
import dialogReducer from "./Reduсers/dialogs-reducer";
import {combineReducers, createStore} from "redux";


const reducers = combineReducers({
    profileData: profileReducer,
    dialogsData: dialogReducer
})


const store =  createStore(reducers);

window.store = store;

export default store;