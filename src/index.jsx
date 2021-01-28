import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import NotFound from './pages/not-found/NotFound.jsx';

const Routes = () => (
	<Router>
		<Switch>
			<Route exact path="/" component={ Home } />
			<Route path="*">
				<NotFound />
			</Route>
		</Switch>
	</Router>
);

ReactDOM.render(
	<Routes />,
	document.getElementById('root')
);
