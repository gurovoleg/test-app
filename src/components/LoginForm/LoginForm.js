import React from 'react';
import { withFormik, ErrorMessage } from "formik";
import { Card, Form } from "semantic-ui-react";
import * as Yup from "yup";
import WithStorage from "../hoc/WithStorage";
import { Redirect } from "react-router-dom";
import { showLoading, resetLoading } from 'react-redux-loading-bar'
import { connect } from "react-redux";

const Message = (props) => {
	return 	<div style={{color: "red"}}>{props.children}</div>;
};


const LoginFormComponent = (props) => {
	const { values, status, touched, errors, handleChange, handleSubmit, isSubmitting, storage, showLoading, resetLoading } = props;
	const submitDisabled = (values.email === "" || values.password === "" || isSubmitting);

	//loading-bar
	isSubmitting ? showLoading() : resetLoading();

	if (status && status.auth) {
		storage.setItem("auth", { token: status.auth });
		return <Redirect to="/" />
	}
	return (
		<Card>
			<Card.Content header="Login" />
			<Card.Content>
				<Form onSubmit={handleSubmit} loading={isSubmitting} error>
					<Form.Group grouped>
						<Form.Input
							error={errors.email !== undefined && errors.email !== "" && touched.email}
							name="email"
							placeholder="email"
							onChange={handleChange}
							value={values.email} />
						<ErrorMessage name="email" component={Message} />
					</Form.Group>
					<Form.Group grouped>
						<Form.Input
							error={errors.password !== undefined && errors.password !== "" && touched.password}
							type="password"
							name="password"
							placeholder="password"
							onChange={handleChange}
							value={values.password} />
						<ErrorMessage name="password" component={Message} />
					</Form.Group>
					<Form.Button
						primary
						type="submit"
						disabled={submitDisabled}>
						Submit
					</Form.Button>
				</Form>
			</Card.Content>
		</Card>
	);
};

const LoginForm = withFormik({
	mapPropsToValues(props) {
		return {
			email: props.email || "",
			password: props.password || "",
		}
	},
	handleSubmit({ password, email }, formikBag) {
		setTimeout(() => {
			if (password === "11111" && email === "test@test.com") {
				formikBag.setStatus({ auth: "test-token" });
			} else {
				formikBag.setErrors({ password: "Неверный логин или пароль" });
			}
			formikBag.setSubmitting(false);
		}, 1000)
	},
	validationSchema: Yup.object().shape({
		email: Yup.string().email("Неверный формат email").required("Необходимо ввести email"),
		password: Yup.string().min(5, "Пароль должен быть не менее 5 символов").required("Необходимо ввести пароль")
	})
})(LoginFormComponent);

const mapDispatchToProps = {
	showLoading,
	resetLoading
};

export default WithStorage(connect(null, mapDispatchToProps)(LoginForm));
