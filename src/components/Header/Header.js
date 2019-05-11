import React from 'react';
import NavMenu from "../NavMenu/NavMenu";
import "./header.css";

class Header extends React.Component{
	render() {
		return (
			<div
				ref={(element) => this.headerRef = element}
				className={this.props.isFixed ? "header header--fixed" : "header"}>
				<NavMenu />
			</div>
		);
	}
}

export default Header;
