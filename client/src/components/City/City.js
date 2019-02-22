import React, { Component } from 'react';
import './City.css'

class City extends Component {
	render() {
		const {name, temp, cloudIndex} = this.props.city;

		return (
			<div className="City">
				<div className="City-title">{name}</div>
				<div className="City-temp">{temp} °C</div>
                <CloudIcon cloudIndex={cloudIndex} />
			</div>
		);
	}
}

export default City;

function CloudIcon(props) {
	const {cloudIndex} = props;
	const icons = ["☀️","🌤","⛅","️🌥","☁️"];
	const icon = icons[parseInt(cloudIndex / 100 * icons.length)];

	return (
		<div className="CloudIcon">
			<span>({cloudIndex})</span> {icon}
		</div>
	);

}
