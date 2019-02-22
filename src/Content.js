import React, { Component } from 'react';

class Content extends Component {
	render() {
		return (
			<div className="Content">
				content {JSON.stringify(this.props.cities)}
			</div>

		);
	}
}

export default Content;
