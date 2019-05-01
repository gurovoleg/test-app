import React from 'react';
import { JsonApiServiceConsumer } from "../JsonApiServiceContext/";

const WithJsonApiService = () => (Wrapped) => (props) => (
	<JsonApiServiceConsumer>
		{jsonApiService => {
			return <Wrapped {...props} jsonApiService={jsonApiService} />
		}}
	</JsonApiServiceConsumer>
);

export default WithJsonApiService;
