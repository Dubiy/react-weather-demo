import React, { Component } from 'react';

class AddCity extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			cityName: ''
		};
		
		// this.onChange = this.onChange.bind(this);
	}
	
	onSubmit = (e) => {
		e.preventDefault();
		this.props.onSubmit(this.state.cityName);
		this.setState({
			cityName: ""
		});
	};
	
	onChange = ({target: {value}}) => {
		this.setState({
			cityName: value
		});
	};
	
	
	render() {
		return (
			<form onSubmit={this.onSubmit}>
				<input value={this.state.cityName} onChange={this.onChange} />
				<input type="submit" value="Add" />
			</form>
		);
	}
	
}

export default AddCity;