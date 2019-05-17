import React, { Fragment } from 'react';
import { Container } from "semantic-ui-react";
import Header from "../Header/Header";
import UpButton from "../UpButton/UpButton";
import "./layout.css";
import NotificationBar from "../NotificationBar/NotificationBar";

class BaseLayout extends React.Component {
	state = {
		headerFixed: false,
		headerOffset: 100,
		headerHeight: null
	};

	componentDidMount() {
		window.addEventListener("scroll", this.setHeaderFixed);
	}

	componentWillUnmount() {
		window.removeEventListener("scroll", this.setHeaderFixed);
	}

	setHeaderFixed = () => {
		let { headerFixed, headerOffset } = this.state;
		const headerHeight = this.header.headerRef.offsetHeight;
		headerOffset += headerHeight;
		if (window.pageYOffset >= headerOffset && headerFixed === false) {
			this.setState({ headerFixed: true, headerHeight});
		}
		if (window.pageYOffset < headerOffset && headerFixed) {
			this.setState({ headerFixed: false, headerHeight: "" });
		}
	};

	render() {
		const { headerFixed, headerHeight } = this.state;
		return (
			<Fragment>
				<NotificationBar />
				<Header ref={(element) => this.header = element} isFixed={headerFixed} />
				<UpButton />
				<Container className="main-container" style={{paddingTop: headerHeight}}>
					{this.props.children}
				</Container>
			</Fragment>
		);
	}
}

export default BaseLayout;
