import React from 'react';
import { Table } from "semantic-ui-react";

const DataTableHeader = ({ columns, colSpan, textAlign }) => {
	const cells = columns.map(name => (
		<Table.HeaderCell
			key={name}
			colSpan={colSpan}
			textAlign={textAlign}
			onClick={() => console.log("Column " + name)}>
			{name}
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

export default DataTableHeader;
