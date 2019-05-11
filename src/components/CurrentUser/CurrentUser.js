import React from 'react';
import WithStorage from "../hoc/WithStorage";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../actions";

const CurrentUser = ({ storage, children, currentUser, logIn }) => {
	if (currentUser.isLogged) {
		return children();
	}

	const auth = storage.getItem("auth");
	if (auth && auth.token) {
		logIn();
		return children();
	}
	return <Redirect to="/login"/>;
};

const mapStateToProps = ({ currentUser }) => ({
	currentUser
});

export default WithStorage(connect(mapStateToProps, actions)(CurrentUser));
