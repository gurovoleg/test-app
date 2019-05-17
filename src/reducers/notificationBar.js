const initialState = {
	visible: false,
	status: "info", //error, success
	header: "Header",
	message: "Content",
	delay: 5000
};

const notificationBar = (state = initialState, action) => {
	switch (action.type) {
		case "SHOW_NOTIFICATION":
			return {
				...state,
				visible: true,
				status: action.payload.status,
				header: action.payload.header,
				message: action.payload.message,
			};
		case "HIDE_NOTIFICATION":
			return {
				...state,
				visible: false
			};
		default:
			return state;
	}
};

export default notificationBar;