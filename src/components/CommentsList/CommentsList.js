import React from 'react';
import DataTableHeader from "../DataTable/DataTableHeader";
import { Table, Pagination } from "semantic-ui-react";
import DataTableBody from "../DataTable/DataTableBody";
import { connect } from "react-redux";
import { commentsRequested, changePage } from "../../actions";
import Spinner from "../Spinner/Spinner";
import { withRouter } from "react-router-dom";
import CurrentUser from "../CurrentUser/CurrentUser";

const columns = [
	{
		name: "id",
		value: "Id" },
	{
		name: "name",
		value: "Name" },
	{
		name: "email",
		value: "Email" },
	{
		name: "body",
		value: "Comment" },
	{
		name: "postId",
		value: "PostId" },
	{
		name: "checkbox",
		value: ""
	}
];

class CommentsList extends React.Component {

	componentDidMount() {
		this.props.fetchComments();
	}

	componentDidUpdate(prevProps, prevState) {
		if ( prevProps.newPage !== this.props.newPage) {
			this.props.changePage();
		}
	}

	onPageChange = (event, data) => {
		this.props.history.push({
			pathname: `/comments/${data.activePage}`
		});
	};

	render() {
		const { loading, commentsOnPage, page, totalPages, error, sortDirection, sortColumn } = this.props;
		if (loading) {
			return <Spinner />
		}
		if (error) {
			return <h3>{error}</h3>
		}

		return (
			<CurrentUser>
				{() => {
					return (
						<Table sortable celled id="tableId">
							<DataTableHeader columns={columns} sortColumn={sortColumn} direction={sortDirection} />
							<DataTableBody data={commentsOnPage} />
							<Table.Footer>
								<Table.Row>
									<Table.HeaderCell colSpan={columns.length}>
										<Pagination
											totalPages={totalPages}
											activePage={page + 1}
											onPageChange={this.onPageChange}/>
									</Table.HeaderCell>
								</Table.Row>
							</Table.Footer>
						</Table>
					)
				}}
			</CurrentUser>
		);
	}
}

const mapStateToProps = ({ commentsList: { commentsOnPage, page, totalPages, recordsLimit, loading, sortColumn, sortDirection } }) => ({
	commentsOnPage,
	page,
	totalPages,
	recordsLimit,
	loading,
	sortColumn,
	sortDirection
});

const mapDispatchToProps = (dispatch, ownProps) => {
	const { newPage } = ownProps;
	return {
		fetchComments: () => dispatch(commentsRequested(newPage)),
		changePage: () => dispatch(changePage(newPage))
	}
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentsList));


// OLD VERSION with service without saga
// const mapDispatchToProps = (dispatch, ownProps) => {
// 	const { jsonApiService, match: { params: { page }} } = ownProps;
// 	return {
// 		fetchComments: () => {
// 			dispatch(actions.commentsRequested());
// 			jsonApiService.getAllComments()
// 				.then(data => dispatch(actions.commentsLoaded(data, page)))
// 				.catch(error => dispatch(actions.commentsError(error)));
// 		}
// 	}
// };
//
// export default compose(
// 	WithJsonApiService(),
// 	connect(mapStateToProps, mapDispatchToProps)
// )(CommentsList);
