import React from 'react';
import DataTableHeader from "../DataTable/DataTableHeader";
import { Table, Pagination } from "semantic-ui-react";
import DataTableBody from "../DataTable/DataTableBody";
import { connect } from "react-redux";
import { commentsRequested, changePage } from "../../actions";
import Spinner from "../Spinner/Spinner";
import { withRouter } from "react-router-dom";
import CurrentUser from "../CurrentUser/CurrentUser";

const columns = ["Id", "Name", "Email", "Comment", "PostId", ""];

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
		console.log(1000);
		const { loading, commentsOnPage, page, totalPages, error } = this.props;

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
						<Table celled id="tableId">
							<DataTableHeader columns={columns} />
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

const mapStateToProps = ({ commentsList: { commentsOnPage, page, totalPages, recordsLimit, loading } }) => ({
	commentsOnPage,
	page,
	totalPages,
	recordsLimit,
	loading
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
