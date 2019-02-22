import React, { Component } from 'react'
import './AddCity.css'

class AddCity extends Component {
	constructor(props) {
		super(props)

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
			<div className="AddCity">
				<div className="AddCity-title">Add city:</div>
				<form className="AddCity-form" onSubmit={this.onSubmit}>
					<input className="AddCity-form-name"
						   value={this.state.cityName}
						   onChange={this.onChange} />
					<input className="AddCity-form-submit"
						   type="submit"
						   value="Add" />
				</form>
			</div>
		);
	}

}

export default AddCity;
