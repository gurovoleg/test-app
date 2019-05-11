import React from "react";
import CommentsList from "../components/CommentsList/CommentsList";
import BaseLayout from "../components/Layouts/BaseLayout";

const Comments = ({ match: { params: { page } } }) => {
	return (
		<BaseLayout>
			<CommentsList newPage={page}/>
		</BaseLayout>
	);
};

export default Comments;

