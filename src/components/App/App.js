import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import store from "../../store";
import { Provider } from "react-redux";
import Comments from "../../pages/Comments";
import About from "../../pages/About";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Logout from "../../pages/Logout";

const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<Switch>
					<Redirect exact from="/home" to="/" />
					<Redirect exact from="/comments" to="/comments/1" />
					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
					<Route path="/login" component={Login} />
					<Route path="/logout" component={Logout} />
					<Route path="/comments/:page(\d+)" component={Comments} />
					<Route render={() => <h3>404 Page not found</h3>} />
				</Switch>
			</Router>
		</Provider>
	);
};

// onWindowScroll(store);

export default App;

