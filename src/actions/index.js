// CommentsList
export const commentsRequested = (page) => ({ type: "FETCH_COMMENTS_REQUEST", payload: page });
export const commentsLoaded = (newComments) => ({ type: "FETCH_COMMENTS_SUCCESS", payload: newComments});
export const commentsError = (error) => ({ type: "FETCH_COMMENTS_ERROR", payload: error });
export const changePage = (page) => ({ type: "CHANGE_COMMENTS_PAGE", payload: page });
export const sortDataOnPage = (columnName) => ({ type: "SORT_COMMENTS_ONPAGE", payload: columnName });

// CurrentUser
export const logIn = () => ({ type: "USER_LOGIN" });
export const logOut = () => ({ type: "USER_LOGOUT" });

// NotificationBar
export const showNotification = (success, header, message) => ({
	type: "SHOW_NOTIFICATION",
	payload: {
		status: success,
		header,
		message
	}
});
export const hideNotification = (delay) => ({ type: "HIDE_NOTIFICATION", payload: delay });
