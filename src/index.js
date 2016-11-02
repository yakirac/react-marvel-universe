import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './assets/bootstrap/css/bootstrap.min.css';
import './assets/bootstrap/js/bootstrap.min.js';
import 'holderjs';

import './assets/base.css';

const rootEl = document.getElementById('app');

ReactDOM.render(
	<AppContainer>
		<App />
	</AppContainer>, 
	rootEl
);

