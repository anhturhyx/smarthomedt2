import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import { roomsReducer } from './reducers/roomReducers'
import { userSigninReducer, userUpdateReducer } from './reducers/userReducer'
import thunk from 'redux-thunk'
import Cookie from 'js-cookie';

const userInfo = Cookie.getJSON('userInfo') || null;
const initialState = {userSignin: {userInfo}}
const reducer = combineReducers({
    rooms: roomsReducer,
    userSignin: userSigninReducer,
    userUpdate: userUpdateReducer
})
const store = createStore(reducer, initialState, compose(applyMiddleware(thunk)))

export default store;