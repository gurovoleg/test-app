import React from 'react';
import * as mockData from "../data/mockData";
import "../global/styles.global.scss";
import BaseLayout from "../components/Layouts/BaseLayout";
import CurrentUser from "../components/CurrentUser/CurrentUser";

const Home = () => {
	return (
		<CurrentUser>
			{() => {
				return (
					<BaseLayout>
						<div className="text-block">
							{mockData.text}
						</div>
					</BaseLayout>
				);
			}}
		</CurrentUser>
	);
};

export default Home;
