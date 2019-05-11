import { combineReducers } from "redux";
import commentsList from "./commentsList";
import currentUser from "./currentUser";

const reducer = combineReducers({
	commentsList,
	currentUser
});

export default reducer;