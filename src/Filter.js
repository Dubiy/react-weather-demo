import React, { Component } from 'react';

class Filter extends Component {
	constructor(props) {
		super(props);

		this.state = {
			filtered: this.props.cities
		}
	}

	componentWillReceiveProps(nextProps) {
        if (nextProps.cities != this.props.cities) {
            this.props.onFilter(nextProps.cities);
        }
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
