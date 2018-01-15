import React, {
	Component
} from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home';
import List from './components/list';
import View from './components/view.jsx';
import registerServiceWorker from './registerServiceWorker.js';

import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';


class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Route component={Home} exact path='/'/>
					<Route component={List} path='/list' />
					<Route component={View} path='/view' />
				</div>
			</Router>
		)
	}
}



ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();