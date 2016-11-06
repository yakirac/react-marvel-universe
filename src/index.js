import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'holderjs';

import './assets/bootstrap/css/bootstrap.min.css';
import './assets/base.css';

const rootEl = document.getElementById('app');

ReactDOM.render(
	<AppContainer>
		<App />
	</AppContainer>, 
	rootEl
);

