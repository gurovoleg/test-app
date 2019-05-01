import { combineReducers } from "redux";
import commentsList from "./commentsList";

const reducer = combineReducers({
	commentsList,
});

export default reducer;