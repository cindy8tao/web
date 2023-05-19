import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import About from './pages/About';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"


ReactDOM.render(
	<div>
		<Router>
			<Switch>
				<Route exact
					path="/web"
					render={() => (
						<HomePage />
					)} />
			</Switch>
			<Switch>
				<Route exact
					path="/about"
					render={() => (
						<About />
					)} />
			</Switch>
		</Router>
	</div>,
	document.getElementById('root')
);