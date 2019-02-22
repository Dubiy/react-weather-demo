import React, { Component } from 'react';
import City from '../City/City'
import AddCity from '../AddCity/AddCity'
import './CityList.css'

class  CityList extends Component {
	render() {
		return (
			<div className="CityList">
				<ul className="CityList-list">
					{ this.props.cities.map((city, key) => <City city={city} key={key}/>) }
				</ul>

				<AddCity onSubmit={this.props.onSubmit} />
			</div>
		);
	}
}

export default CityList;
