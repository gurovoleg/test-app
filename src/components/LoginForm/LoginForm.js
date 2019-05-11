import React from 'react';
import { withFormik, ErrorMessage } from "formik";
import { Card, Form } from "semantic-ui-react";
import * as Yup from "yup";
import WithStorage from "../hoc/WithStorage";
import { Redirect } from "react-router-dom";

const LoginFormComponent = (props) => {
	const { values, status, errors, handleChange, handleSubmit, isSubmitting, storage } = props;
	const submitDisabled = (values.email === "" || values.password === "" || isSubmitting);

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
							error={errors.email !== undefined && errors.email !== ""}
							name="email"
							placeholder="email"
							onChange={handleChange}
							value={values.email} />
						<ErrorMessage name="email" render={msg => <div style={{color: "red"}}>{msg}</div>}/>
					</Form.Group>
					<Form.Group grouped>
						<Form.Input
							error={errors.password !== undefined && errors.password !== ""}
							type="password"
							name="password"
							placeholder="password"
							onChange={handleChange}
							value={values.password} />
						<ErrorMessage name="password" render={msg => <div style={{color: "red"}}>{msg}</div>}/>
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
			email: props.email || "test@test.com",
			password: props.password || "11111",
		}
	},
	handleSubmit({ password, email }, formikBag) {
		setTimeout(() => {
			if (password === "11111" && email === "test@test.com") {
				formikBag.setStatus({ auth: "test-token" });
				formikBag.resetForm();
			} else {
				formikBag.setErrors({ password: "Неверный логин или пароль" });
			}
			formikBag.setSubmitting(false);
		}, 1000)
	},
	validationSchema: Yup.object().shape({
		email: Yup.string().email().required("Email is required"),
		password: Yup.string().min(5, "Must be more then 5 characters").required("Password is required")
	})
})(LoginFormComponent);

export default WithStorage(LoginForm);
