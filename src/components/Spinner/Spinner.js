import React from "react";
import "./spinner.css";

const Spinner = (props) => {
	const size = {
		width: props.size,
		height: props.size,
	};

	return (
		<div style={size} className="spinnerWrapper centered">
			<div className="spinner">
				<div></div>
			</div>
		</div>
	)
};

export default Spinner;

Spinner.defaultProps = {
	size: "100px"
};

