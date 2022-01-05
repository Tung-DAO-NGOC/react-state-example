import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
	state = {
		username: 'YOUR NAME',
	};
	render() {
		return (
			<nav id="navbar">
				<ul>
					<a href={'#'}>
						<li>Home</li>
					</a>
					<a href={'#'}>
						<li>Contact</li>
					</a>
					<a href={'#'}>
						<li>About</li>
					</a>
				</ul>

				<div className="nav-details">
					<p>{this.state.username}</p>
				</div>
			</nav>
		);
	}
}

export default Navbar;
