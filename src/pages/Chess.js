import React from 'react';
import BaseLayout from "../components/Layouts/BaseLayout";
import ChessBoard from "../components/ChessBoard/ChessBoard";
import LayoutCenterEmpty from "../components/Layouts/LayoutCenterEmpty";
import * as actions from "../actions";

import { Button } from "semantic-ui-react";
import { connect } from "react-redux";

const Chess = ({ showNotification }) => {
	const message = `This is a test notification. 5 seconds online`;
	return (
		<BaseLayout>
			<Button primary onClick={() => showNotification("success", "Test", message)}>Notify</Button>
			<LayoutCenterEmpty>
				<ChessBoard />
			</LayoutCenterEmpty>
		</BaseLayout>
	);
};

export default connect(
	null,
	actions
)(Chess);

