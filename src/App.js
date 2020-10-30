import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import Main from './components/MainComponent';
import './App.css';

class App extends Component {
	render() {
		return (
			<HashRouter basename='/'>
				<div className='App'>
					<Main />
				</div>
			</HashRouter>
		);
	}
}

export default App;
