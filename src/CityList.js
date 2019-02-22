import React, { Component } from 'react';
import City from './City'
import AddCity from './AddCity'

class  CityList extends Component {
	render() {
		return (
			<div className="CityList">
				<ul>
					{ this.props.cities.map((city, key) => <City city={city} key={key}/>) }
				</ul>

				<AddCity onSubmit={this.props.onSubmit} />
			</div>
		);
	}
}

export default CityList;
