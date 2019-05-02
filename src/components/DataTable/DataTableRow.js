import React from 'react';
import { Table, Checkbox } from "semantic-ui-react";
import "./dataTable.css";
import DataTableExpandableRow from "./DataTableExpandableRow";

class DataTableRow extends React.Component {
	state = { visible: false };
	key = `TableCommentID_${this.props.data.id}`;

	componentDidMount() {
		let storageValue = localStorage.getItem(this.key);
		storageValue = storageValue ===  "true";
		if (storageValue) {
			this.setState({ visible: storageValue });
		} else {
			localStorage.setItem(this.key, this.state.visible);
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.visible !== this.state.visible) {
			localStorage.setItem(this.key, this.state.visible);
		}
	}

	render() {
		const { data } = this.props;
		const { visible } = this.state;

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
