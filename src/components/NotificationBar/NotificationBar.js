import React from 'react';
import { Message } from "semantic-ui-react";
import "./notificationBar.scss";
import { connect } from "react-redux";
import * as actions from "../../actions";

class NotificationBar extends React.Component {
	componentDidMount() {
		// this.closeNotification(this.props.delay);
	}

	componentDidUpdate(prevProps) {
		if (this.props.visible && this.props.visible !== prevProps.visible) {
			this.closeNotification(this.props.delay);
		}
	}

	closeNotification = (delayTime = 0) => {
		setTimeout(this.props.hideNotification, delayTime);
	};

	render() {
		const { status, header, message, visible } = this.props;
		const classNames = visible ? "notification-bar notification-bar--show" : "notification-bar";
		return (
			<div className={classNames}>
				<Message
					onDismiss={this.closeNotification}
					error={status === "error"}
					info={status === "info"}
					success={status === "success"}
					header={header}
					content={message}
				/>
			</div>
		)
	}
}

const mapStateToProps = ({ notificationBar: { visible, status, header, message, delay } }) => ({
	visible,
	status,
	header,
	message,
	delay
});

export default connect(mapStateToProps, actions)(NotificationBar);
