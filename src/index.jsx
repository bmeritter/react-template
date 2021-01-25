import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
} from 'react-router-dom';
import Home from './home/Home.jsx';
import About from './about/About.jsx';
import NotFound from './not-found/NotFound.jsx';

const Routes = () => (
	<Router>
		<div>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
				</ul>
			</nav>

			<Switch>
				<Route exact path="/" component={ Home }/>
				<Route path="/about" component={ About }/>

				<Route path="*">
					<NotFound/>
				</Route>

			</Switch>
		</div>
	</Router>
);

ReactDOM.render(
	<Routes/>,
	document.getElementById('root')
);
