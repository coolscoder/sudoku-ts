import React, { FC } from 'react';
import { Container, Logo } from './styles'
import { Title } from '..'
import LogoSrc from '../../assets/image/sudoku.png'

const Header: FC = () => (
	<Container>
		<Logo src={LogoSrc} />
		<Title>Sudoku</Title>
	</Container>
);

export default Header;