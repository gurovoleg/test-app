const initialState = {
	allComments: [],
	commentsOnPage: [],
	sortColumn: null,
	sortDirection: null,
	page: 0,
	totalPages: 0,
	recordsLimit: 10,
	loading: false,
	error: null
};

const commentsList = (state = initialState, action) => {
	const { allComments, commentsOnPage, page, recordsLimit, sortDirection, sortColumn } = state;

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
				commentsOnPage: sortData(getPageData(allComments, action.payload - 1, recordsLimit), null, sortDirection, sortColumn )
			};
		case "SORT_COMMENTS_ONPAGE":
			return {
				...state,
				sortColumn: action.payload,
				commentsOnPage: sortData(commentsOnPage, action.payload, sortDirection, sortColumn ),
				sortDirection: changeSortDirection(sortDirection, sortColumn, action.payload),
			};
		default:
			return state;
	}
};

//Выборка данных для определенной страницы из общего массива
const getPageData = (data, page, recordsLimit) => {
	return data.slice(page*recordsLimit, (page + 1)*recordsLimit)
};

//Сортировка данных
const sortData = (data = [], clickedColumn, sortDirection, sortColumn) => {
	sortDirection = changeSortDirection(sortDirection, sortColumn, clickedColumn);
	const column = clickedColumn === null ? sortColumn : clickedColumn;
	data.sort((a,b) => {
		const result = sortDirection === "ascending" ? 1 : -1;
		return a[column] >= b[column] ? result : -result;
	});

	return [...data];
};

const changeSortDirection = (sortDirection, sortColumn, clickedColumn) => {
	if (clickedColumn === null) {
		return sortDirection
	} else 	if (clickedColumn === sortColumn) {
		return sortDirection === "ascending" ? "descending" : "ascending";
	}
	return "ascending";
};

export default commentsList;