import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

const Redirect = () => {
	setTimeout(function() {
		console.log('signin');
	}, 5000);
	return <h1>Redirect ke signin</h1>;
};

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: null,
			isLogin: null
		};
	}

	async componentWillMount() {
		await fetch('https://jsonplaceholder.typicode.com/todos/1')
			.then(res => res.json())
			.then(json => {
				this.setState({
					user: json,
					isLogin: true
				});
				console.log(this.state);
			});
	}

	render() {
		if (!this.state.user) {
			return null;
		}
		const user = this.state.user;
		if (this.state.user.id !== 1) {
			return <Redirect />;
		}

		return (
			<div>
				<h1>List User : {user.id} </h1>
				<h2>
					{user.id} : {user.title}
				</h2>
			</div>
		);
	}
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
