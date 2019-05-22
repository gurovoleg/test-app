import React from 'react';
import { Table } from "semantic-ui-react";
import DataTableRow from "./DataTableRow";

const DataTableBody = ({ data }) => {
	// console.table(data);
	const tableBody = data.map(item => <DataTableRow key={item.id} data={item} />);
	return (
		<Table.Body>
			{tableBody}
		</Table.Body>
	);
};

export default DataTableBody;