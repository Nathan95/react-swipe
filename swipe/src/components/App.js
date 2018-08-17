import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Card from ' Card';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [0, 1, 2, 3, 4]
		};
	}
	render() {
		var box = this.state.data.map((item, i) => {
			return <Card key={i} no={i} />;
		});
		return <div className="app">{box}</div>;
	}
}

export default App;
