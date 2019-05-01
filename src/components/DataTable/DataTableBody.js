import React from 'react';
import { Table } from "semantic-ui-react";
import DataTableRow from "./DataTableRow";

const DataTableBody = ({ data }) => {
	const tableBody = data.map((item, idx) => <DataTableRow key={item.id} data={item} idx={idx} />);
	return (
		<Table.Body>
			{tableBody}
		</Table.Body>
	);
};

export default DataTableBody;