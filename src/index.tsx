import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';

import {
	Card,
	Content,
	Grid,
	Controller,
	Numbers,
	Header,
} from './components';
import { configureStore, register } from './core';
import { GlobalStyles, theme } from './styles';

const { persistor, store } = configureStore();

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<GlobalStyles />
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Content>
					<Header />
					<Card>
						<Controller />
						<Grid />
						<Numbers />
					</Card>
				</Content>
			</PersistGate>
		</Provider>
	</ThemeProvider>,
	document.getElementById('root')
);

register();
