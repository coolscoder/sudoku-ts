import React, { FC, useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';
import Select from 'react-select'

import { Button } from '..';
import { createGrid } from '../../store';
import { Container } from './styles';


interface ILevel {
	value: string;
	label: string;
}

const options = [
	{ value: 'easy', label: 'Easy' },
	{ value: 'medium', label: 'Medium' },
	{ value: 'hard', label: 'Hard' },
]

const Controller: FC = () => {
	const [level, setLevel] = useState<ILevel>(options[0])
	const dispatch = useDispatch<Dispatch<AnyAction>>();

	const createNewGrid = () => {
		dispatch(createGrid(level.value));
	}

	useEffect(() => {
		createNewGrid()
	}, [level])

	return (
		<Container>
			<Button onClick={createNewGrid}>New Game</Button>
      <Select value={level} options={options} onChange={(e: any) => setLevel(e)} />
		</Container>
	);
};

export default Controller;
