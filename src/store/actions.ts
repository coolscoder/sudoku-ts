import { Action, AnyAction } from 'redux';

import { BLOCK_COORDS, NUMBERS } from '../typings';

import * as types from './types';

export const createGrid = (level: String): AnyAction => ({ type: types.CREATE_GRID, level });

export const fillBlock = (value: NUMBERS, coords: BLOCK_COORDS): AnyAction => ({
	coords,
	type: types.FILL_BLOCK,
	value,
});

export const selectBlock = (coords: BLOCK_COORDS): AnyAction => ({
	coords,
	type: types.SELECT_BLOCK,
});
