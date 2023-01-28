import profileReducer from "./Reduсers/profile-reducer";
import dialogReducer from "./Reduсers/dialogs-reducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import usersReducer from "./Reduсers/users-reducer";
import authReducer from "./Reduсers/auth-reducer";
import thunkMiddleware from "redux-thunk";

const reducers = combineReducers({
    profileData: profileReducer,
    dialogsData: dialogReducer,
    usersData: usersReducer,
    authData: authReducer,
});


const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;