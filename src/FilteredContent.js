import React, { Component } from 'react';
import Content from "./Content";

class FilteredContent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			filtered: this.props.cities
		}
	}

	componentWillReceiveProps(nextProps) {
        if (nextProps.cities !== this.props.cities) {
            //DO FILTERING ON NEW DATA
            this.filterData(nextProps.cities);
        }
    }

	componentDidMount() {
	    //DO FILTERING
		// this.props.onFilter(this.state.filtered);
	}

	filterData(nextCities = null) {
	    const dataToFilter = nextCities || this.props.cities;

	    this.setState({
            filtered: dataToFilter
        });
    }

	render() {
		return (
			<>
                <Content cities={this.state.filtered}/>
            </>
		)
	}

}

export default FilteredContent;
