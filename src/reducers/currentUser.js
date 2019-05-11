const initialState = {
	isLogged: false,
	isAdmin: false
};

const currentUser = (state = initialState, action) => {
	switch (action.type) {
		case "USER_LOGIN":
			return {
				...state,
				isLogged: true
			};
		case "USER_LOGOUT":
			return {
				isLogged: false,
				isAdmin: false
			};
		default:
			return state;

	}
};

export default currentUser;