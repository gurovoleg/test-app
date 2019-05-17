import React from 'react';
import { Menu, Container, Input } from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../actions";

class NavMenu extends React.Component {
	state = { activeItem: "Home" };

	handleItemClick = (e, { name }) => {
		this.props.history.push({
			pathname: `/${name}`
		});
		setTimeout(() => {
			this.props.showNotification("info", "Переход", "Вы перешли на вкладку " + name );
		}, 0);
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
					<Menu.Item
						name='chess'
						active={activeItem === 'chess'}
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

export default withRouter(connect(mapStateToProps, actions)(NavMenu));
