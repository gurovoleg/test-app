import React from 'react';
import { Table } from "semantic-ui-react";
import * as mockData from "../../data/mockData";
import DataTableHeader from "./DataTableHeader";

const DataTableExpandableRow = ({ visible }) => {
	const classNames = visible ? "table-expanded-row table-expanded-row--visible" : "table-expanded-row";
	return (
		<Table.Row className={classNames}>
			<Table.Cell colSpan={6}>
				<Table>
					<DataTableHeader columns={["Header"]} colSpan={2} />
					<Table.Body>
						<Table.Row>
							<Table.Cell>{mockData.text}</Table.Cell>
							<Table.Cell>{mockData.text}</Table.Cell>
						</Table.Row>
					</Table.Body>
					<Table.Footer>
						<Table.Row>
							<Table.HeaderCell colSpan={2} textAlign="center">Footer</Table.HeaderCell>
						</Table.Row>
					</Table.Footer>
				</Table>
			</Table.Cell>
		</Table.Row>
	);
};

export default DataTableExpandableRow;
