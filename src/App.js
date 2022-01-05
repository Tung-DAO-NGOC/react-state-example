import React, { Component } from 'react';
import User from './components/User';
import Navbar from './components/Navbar';
import './index.css';

class App extends Component {
	state = {
		userA: {
			firstName: '',
			avatarUrl: '',
		},
		userB: {
			firstName: '',
			avatarUrl: '',
		},
		clickCount: 0,
		backColor: 'yellow',
		bootcamp: 'Ironhack',
	};

	colorMapper = () => {
		return '#' + Math.floor(Math.random() * 16777215).toString(16);
	};

	clickHandler = () => {
		const updatedCount = this.state.clickCount + 1;
		if (updatedCount % 5 === 0) {
			const newColor = this.colorMapper();
			this.setState({ backColor: newColor });
		}
		this.setState({ clickCount: updatedCount });
	};

	render() {
		return (
			<div className="App">
				<Navbar />
				<h1>React - state</h1>
				<p>Count is: {this.state.clickCount}</p>
				<button onClick={this.clickHandler}> Click me </button>

				<User
					bootcampName={this.state.bootcamp}
					theColor={this.state.backColor}
					firstName={this.state.userA.firstName}
					image={this.state.userA.avatarUrl}
				/>
				<User bootcampName={this.state.bootcamp} firstName={this.state.userB.firstName} image={this.state.userB.avatarUrl} />
			</div>
		);
	}
}

export default App;
