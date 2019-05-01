import React from 'react';
import { Table } from "semantic-ui-react";
import { connect } from "react-redux";
import "./dataTable.css";
import * as actions from "../../actions";

class DataTableRow extends React.Component {
	state = { visible: false };

	render() {
		const { data, idx, toggleVisible } = this.props;
		const classNames = data.visible ? "table-expanded-row table-expanded-row--visible" : "table-expanded-row";
		return (
			<React.Fragment>
				<Table.Row
					className="table-row"
					onClick={() => toggleVisible(idx)}>
					<Table.Cell>{data.id}</Table.Cell>
					<Table.Cell>{data.name}</Table.Cell>
					<Table.Cell>{data.email}</Table.Cell>
					<Table.Cell>{data.body}</Table.Cell>
					<Table.Cell>{data.postId}</Table.Cell>
				</Table.Row>
				<Table.Row className={classNames}>
					<Table.Cell colSpan={5}>{data.body}</Table.Cell>
				</Table.Row>
			</React.Fragment>
		);
	}
}

export default connect(null, actions)(DataTableRow);
