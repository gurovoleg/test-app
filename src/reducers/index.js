import { combineReducers } from "redux";
import commentsList from "./commentsList";
import currentUser from "./currentUser";
import { loadingBarReducer } from 'react-redux-loading-bar'

const reducer = combineReducers({
	commentsList,
	currentUser,
	loadingBar: loadingBarReducer,
});

export default reducer;