import React from "react";
import "./layout.css";

const LayoutCenterEmpty = (props) => {
	return (
		<div className="layoutEmptyCenterWrapper">
			<div className="LayoutCenterEmpty">
				{props.children}
			</div>
		</div>
	);
};

export default LayoutCenterEmpty;
