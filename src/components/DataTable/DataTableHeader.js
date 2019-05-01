import React from 'react';
import { Table } from "semantic-ui-react";

const DataTableHeader = ({ columns }) => {
	const tableHeader = columns.map(name => (
		<Table.HeaderCell
			key={name}
			onClick={() => alert("Column " + name)}>
			{name}
		</Table.HeaderCell>
	));
	return (
		<Table.Header>
			<Table.Row>
				{tableHeader}
			</Table.Row>
		</Table.Header>
	);
};

export default DataTableHeader;
