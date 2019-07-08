//import react and reactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {
	return 'Click on Me!';
}
//create a react component
const App = function() {
	const labelText = 'Enter name:';

	return (
		<div> 
			<label className="label" htmlFor="name">
			{labelText}
			</label>
			<input id="name" type="text" />
			<button style={{backgroundColor : 'blue', color : 'white'}}>
			{getButtonText()}
			</button>
		</div>
		);
};


//take react component and show on screen
ReactDOM.render(
	<App />,
	document.querySelector('#root')
	);