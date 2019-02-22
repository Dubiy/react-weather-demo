import React, { Component } from 'react';

class City extends Component {
	
	
	render() {
		const {name} = this.props.city;
		
		return (
			<li className="city">
				{name}
			</li>
			
		);
		
	}
}

export default City;