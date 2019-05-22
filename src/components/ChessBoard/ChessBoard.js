import React, { useState, useEffect } from 'react';
import "./chessBoard.scss";

const ChessBoard = ({ rowsNumber = 8, colsNumber = 8 }) => {
	const [data, setData] = useState(null);
	useEffect(() => {
		setData(createBoardData(rowsNumber, colsNumber));
	}, [rowsNumber, colsNumber]);

	const [activeId, setActive] = useState(null);
	const [targetItems, setTargetItems] = useState(null);
	const handleSetActive = (id) => {
		setActive(id);
		setTargetItems(findTargetSquares(id, rowsNumber, colsNumber));
	};

	let squares = null;
	if (data) {
		const activeItems = { activeId, targetItems };
		squares = data.map((row, idx) => (
			<Row key={idx} data={row} activeItems={activeItems} setActive={handleSetActive}/>)
		)
	}

	return (
		<div className="chess-board">{squares}</div>
	)
};

export default ChessBoard;

const Row = ({ data, activeItems, setActive }) => {
	const squares = data.map(item => <Square key={item.id} id={item.id} color={item.color} activeItems={activeItems} setActive={setActive} />);
	return (
		<div className="row-flex">
			{squares}
		</div>
	)
};

const Square = ({ id, activeItems, setActive, color }) => {
	const { activeId, targetItems } = activeItems;

	let classNames = `square square--${color}`;
	if (id === activeId) {
		classNames += " square--selected";
	} else if (targetItems && targetItems.includes(id)) {
		classNames += " square--target";
	}

	return (
		<div
			className={classNames}
			onClick={() => setActive(id)}>
		</div>
	);
};

const createBoardData = (rows = 8, cols = 8) => {
	const chessBoardData = [];

	for(let i = 1; i <= rows; i++) {
		let rowData = [];
		for(let j = 1; j <= cols; j++) {
			rowData.push({ id: "" + i + j, active: false, color: getColor(i, j) });
		}
		chessBoardData.push(rowData);
	}

	function getColor(row, col) {
		if (row % 2 !== 0) {
			return col % 2 !== 0 ? "white" : "black";
 		}
		return col % 2 === 0 ? "white" : "black";
	}

	return chessBoardData;
};

const findTargetSquares = (id, rows, cols) => {
	const row = +id.substr(0,1);
	const col = +id.substr(1,1);
	let result = [];

	for(let i = -2; i <= 2; i++) {
		if (i === 0) continue;
		const newRow = row + i;
		for(let j = -2; j <= 2; j++) {
			if (j === 0 || Math.abs(i + j) % 2 === 0) continue;
			const newCol = col + j;
			if (newCol > 0 && newCol <= cols && newRow > 0 && newRow <= rows) {
				result.push("" + newRow + newCol);
			}
		}
	}

	return result;
};
