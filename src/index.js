/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './app';
import {DevTools} from '@components';
import configureStore from './configure-store';

const store = configureStore();

const devTools = process.env.dev && <DevTools/>;
ReactDOM.render((
	<Provider store={store}>
		<div>
			<App/>
			{devTools}
		</div>
	</Provider>
), document.getElementById('root'));
