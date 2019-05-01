// CommentsList
export const commentsRequested = (page) => ({ type: "FETCH_COMMENTS_REQUEST", payload: page });
export const commentsLoaded = (newComments) => ({ type: "FETCH_COMMENTS_SUCCESS", payload: newComments});
export const commentsError = (error) => ({ type: "FETCH_COMMENTS_ERROR", payload: error });
export const changePage = (page) => ({ type: "CHANGE_COMMENTS_PAGE", payload: page });

//dataTableRow
export const toggleVisible = (idx) => ({ type: "TOGGLE_EXPANDED_ROW_VISIBLE", payload: idx });

