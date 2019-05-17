import { combineReducers } from "redux";
import commentsList from "./commentsList";
import currentUser from "./currentUser";
import { loadingBarReducer } from 'react-redux-loading-bar'
import notificationBar from "./notificationBar";

const reducer = combineReducers({
	commentsList,
	currentUser,
	notificationBar,
	loadingBar: loadingBarReducer,
});

export default reducer;