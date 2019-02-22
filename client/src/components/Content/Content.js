import React, { Component } from 'react';
import City from "../City/City";

class Content extends Component {
	render() {
		const {cities} = this.props;
		return (
			<div className="Content">
				{cities.map((city, idx) => <City city={city} key={idx} />)}
			</div>
		);
	}
}

export default Content;
