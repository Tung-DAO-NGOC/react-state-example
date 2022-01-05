import React from 'react';

function User(props) {
	return (
		<div>
			<h2 style={{ backgroundColor: props.theColor }}>Hello, {props.firstName}</h2>

			<h2> Welcome To {props.bootcampName} </h2>
			<img src={props.image} alt={'alt_text'} width="350" height="350" />
		</div>
	);
}

export default User;
