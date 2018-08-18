import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import '../App.css';

class App extends Component {

		state = {
			data: [0, 1, 2, 3, 4]
		};

	render() {
		return (
			<div className="app">
				<div className="header">M:i:III</div>
				<div className="sub-header">Position: Stunt Double</div>
				{this.state.data.map((item, i) => <Card key={i} no={i} />)}
			</div>
		);
	}
}

export default App;
