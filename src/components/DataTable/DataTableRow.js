import React from 'react';
import { Table, Checkbox } from "semantic-ui-react";
import { connect } from "react-redux";
import "./dataTable.css";
import * as actions from "../../actions";
import DataTableExpandableRow from "./DataTableExpandableRow";

class DataTableRow extends React.Component {
	state = { visible: false };

	render() {
		const { visible } = this.state;
		const { data } = this.props;
		return (
			<React.Fragment>
				<Table.Row
					className="table-row"
					onClick={() => this.setState(state => ({ visible: !state.visible }))}>
					<Table.Cell>{data.id}</Table.Cell>
					<Table.Cell>{data.name}</Table.Cell>
					<Table.Cell>{data.email}</Table.Cell>
					<Table.Cell>{data.body}</Table.Cell>
					<Table.Cell>{data.postId}</Table.Cell>
					<Table.Cell collapsing>
						<Checkbox toggle checked={visible}/>
					</Table.Cell>
				</Table.Row>

				<DataTableExpandableRow visible={visible}/>

			</React.Fragment>
		);
	}
}

export default DataTableRow;
