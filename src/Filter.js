import React, { Component } from 'react';

class Filter extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			filtered: this.props.cities
		}
	}
	
	static getDerivedStateFromProps(nextProps, prevState) {
		console.log('helloo', nextProps, prevState);
		// if (
		// 	!prevState ||
		// 	prevState.current !== nextProps.amount
		// ) {
		// 	return {
		// 		previous: prevState.current,
		// 		current: nextProps.amount
		// 	};
		// }
	}
	
	componentDidMount() {
		this.props.onFilter(this.state.filtered);
	}
	
	render() {
		return (
			<div>filter here</div>
		)
	}
	
}

export default Filter;