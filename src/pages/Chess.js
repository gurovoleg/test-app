import React from 'react';
import BaseLayout from "../components/Layouts/BaseLayout";
import ChessBoard from "../components/ChessBoard/ChessBoard";
import LayoutCenterEmpty from "../components/Layouts/LayoutCenterEmpty";

const Chess = (props) => {
	return (
		<BaseLayout>
			<LayoutCenterEmpty>
				<ChessBoard />
			</LayoutCenterEmpty>
		</BaseLayout>
	);
};

export default Chess;

