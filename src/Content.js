import React, { Component } from 'react';
import Filter from './Filter'

class Content extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			filtered: props.cities
		}
		
		console.log('content constructor fired');
	}
	
	onFilter = (filtered) => {
		this.setState({
			filtered
		})
	}
	
	render() {
		return (
			<div className="Content">
				<Filter cities={this.props.cities} onFilter={this.onFilter} />
				
				content {JSON.stringify(this.state.filtered)}
				content {JSON.stringify(this.props.cities)}
			</div>
		
		);
		
	}
}

export default Content;