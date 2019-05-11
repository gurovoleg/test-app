import React from 'react';
import { Menu, Container, Input } from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class NavMenu extends React.Component {
	state = { activeItem: "Home" };

	handleItemClick = (e, { name }) => {
		this.props.history.push({
			pathname: `/${name}`
		})
	};

	render() {
		const { activeItem } = this.state;
		const menuItemName = this.props.isLogged ? "logout" : "login";
		return (
			<Menu borderless inverted>
				<Container>
					<Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
					<Menu.Item
						name='comments'
						active={activeItem === 'comments'}
						onClick={this.handleItemClick}
					/>
					<Menu.Item
						name='about'
						active={activeItem === 'about'}
						onClick={this.handleItemClick}
					/>
					<Menu.Menu position="right">
						<Menu.Item>
							<Input icon="search" size="mini" placeholder="search"/>
						</Menu.Item>
						<Menu.Item
							name={menuItemName}
							active={activeItem === menuItemName}
							onClick={this.handleItemClick}
						/>
					</Menu.Menu>
				</Container>
			</Menu>
		);
	}
}

const mapStateToProps = ({ currentUser }) => ({
	isLogged: currentUser.isLogged,
});

export default withRouter(connect(mapStateToProps)(NavMenu));
