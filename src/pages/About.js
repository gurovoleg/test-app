import React, { useState, useEffect } from 'react';
import BaseLayout from "../components/Layouts/BaseLayout";

// Пользовательскте хуки (вынесены из компонента и могут быть использованы в любом функциональном компоненте)
const useDocumentTitle = (value) => {
	useEffect(() => {
		document.title = value;
	});
};

const useWindowWidth = () => {
	const [width, setWidth] = useState(window.innerWidth);
	useEffect(() => {
		const handleWidth = () => {
			setWidth(window.innerWidth);
		};
		window.addEventListener("resize", handleWidth);
		return () => {
			window.removeEventListener("resize", handleWidth);
		}
	});
	return width;
};

const About = () => {
	const [count, setCount] = useState(10);
	const [value, changeValue] = useState();
	const width = useWindowWidth();
	useDocumentTitle(value);

	const handleChangeValue = (e) => {
		changeValue(e.target.value);
	};

	return (
		<BaseLayout>
			<h3>About page</h3>
			<h4>{count}</h4>
			<h4>Width: {width}</h4>
			<button onClick={() => setCount(count + 1)}>Increase</button>
			<label>{value}
				<input type="text" value={value} onChange={handleChangeValue}/>
			</label>

		</BaseLayout>
	)
};

export default About;
