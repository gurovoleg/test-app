import React from 'react';
import { Table } from "semantic-ui-react";
import { connect } from "react-redux";
import * as actions from "../../actions";

const DataTableHeader = ({ columns, colSpan, textAlign, sortDataOnPage, sortColumn, direction }) => {

	const handleOnClick = (column) => {
		if (column.value !== "") {
			sortDataOnPage(column.name)
		}
	};

	const cells = columns.map(column => (
		<Table.HeaderCell
			sorted={column.name === sortColumn ? direction : null}
			key={column.value}
			colSpan={colSpan}
			textAlign={textAlign}
			onClick={() => handleOnClick(column)}>
			{column.value}
		</Table.HeaderCell>
	));
	return (
		<Table.Header>
			<Table.Row>
				{cells}
			</Table.Row>
		</Table.Header>
	);
};

DataTableHeader.defaultProps = {
	textAlign: "center",
	colSpan: 0
};

export default connect(null, actions)(DataTableHeader);
