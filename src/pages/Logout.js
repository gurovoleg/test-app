import React from 'react';
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import WithStorage from "../components/hoc/WithStorage";

const Logout = ({ logOut, storage }) => {
	storage.removeItem("auth");
	logOut();
	return 	<Redirect to="/" />;
};

export default WithStorage(connect(null, actions)(Logout));
