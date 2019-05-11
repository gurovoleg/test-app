import React from "react";

const storage = {
	getItem(name) {
		const ls = localStorage.getItem(name);
		if (ls) {
			return JSON.parse(ls);
		}
	},
	setItem(name, value) {
		localStorage.setItem(name, JSON.stringify(value));
	},
	removeItem(name) {
		localStorage.removeItem(name);
	},
};

const WithStorage = (Wrapped) => (props) => {
	return <Wrapped {...props} storage={storage} />
};

export default WithStorage;