import React from "react";

const storage = {
	getItem(storageName) {
		const ls = localStorage.getItem(storageName);
		if (ls) {
			return JSON.parse(ls);
		}
	},
	setItem(storageName, value) {
		localStorage.setItem(storageName, JSON.stringify(value));
	}
};

const WithStorage = (Wrapped) => (props) => {
	return <Wrapped {...props} storage={storage} />
};

export default WithStorage;