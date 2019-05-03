import React from 'react';
import { Table, Checkbox } from "semantic-ui-react";
import "./dataTable.css";
import DataTableExpandableRow from "./DataTableExpandableRow";
import WithStorage from "../hoc/WithStorage";


class DataTableRow extends React.Component {
	state = { visible: false };
	key = `Table-comments`;

	componentDidMount() {
		const { id } = this.props.data;
		const storage = this.props.storage.getItem(this.key);
		if (storage && storage[id]) {
			this.setState({ visible: storage[id] });
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.visible !== this.state.visible) {
			const  { data: { id }, storage } = this.props;
			const storageData = storage.getItem(this.key) || {};
			if (this.state.visible) {
				storageData[id] = this.state.visible;
			} else {
				delete storageData[id];
			}
			storage.setItem(this.key, storageData);
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

export default WithStorage(DataTableRow);
