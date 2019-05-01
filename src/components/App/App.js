import React from 'react';
import CommentsList from "../CommentsList/CommentsList";
import { Container } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import store from "../../store";
import { Provider } from "react-redux";

const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<Container style={{margin: "20px 0"}}>
					<Switch>
						<Redirect exact from="/" to="/comments/1" />
						<Route path="/comments/:page(\d+)" component={CommentsList} />
						<Route render={() => <h1>404 Page not found</h1>} />
					</Switch>
				</Container>
			</Router>
		</Provider>
	);
};

export default App;

