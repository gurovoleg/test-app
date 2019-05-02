const initialState = {
	allComments: [],
	commentsOnPage: [],
	page: 0,
	totalPages: 0,
	recordsLimit: 10,
	loading: false,
	error: null
};

const commentsList = (state = initialState, action) => {
	const { allComments, page, recordsLimit } = state;

	switch (action.type) {
		case "FETCH_COMMENTS_REQUEST":
			return {
				...state,
				allComments: [],
				page: action.payload - 1,
				loading: true,
				error: null
			};
		case "FETCH_COMMENTS_SUCCESS":
			return {
				...state,
				allComments: action.payload,
				commentsOnPage: getPageData(action.payload, page, recordsLimit),
				totalPages: Math.ceil(action.payload.length / state.recordsLimit),
				loading: false,
				error: null
			};
		case "FETCH_COMMENTS_FAILURE":
			return {
				...state,
				allComments: [],
				loading: false,
				error: action.payload
			};
		case "CHANGE_COMMENTS_PAGE":
			return {
				...state,
				page: action.payload - 1,
				commentsOnPage: getPageData(allComments, action.payload - 1, recordsLimit)
			};
		default:
			return state;
	}
};

//Выюорка данных для определенной страницы из общего массива
const getPageData = (data, page, recordsLimit) => {
	return data.slice(page*recordsLimit, (page + 1)*recordsLimit)
};


export default commentsList;