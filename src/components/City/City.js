import React, { Component } from 'react';
import './City.css'

class City extends Component {
	render() {
		const {name, temp} = this.props.city;

		return (
			<li className="City">
				<div className="City-title">{name}</div>
				<div className="City-temp">{temp} °C</div>
			</li>
		);
	}
}

export default City;
