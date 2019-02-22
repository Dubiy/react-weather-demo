import React, { Component } from 'react';
import Content from "../Content/Content";
import "./Filter.css";

class Filter extends Component {
	constructor(props) {
		super(props);

		this.state = {
			filtered: [],
            minTemp: 0,
            maxTemp: 0,
            temp: 0,
            cloudIndex: 50
		}
	}

	componentWillReceiveProps(nextProps) {
        if (nextProps.cities !== this.props.cities) {
            //DO FILTERING ON NEW DATA
            let {minTemp, maxTemp} = this.state;
            nextProps.cities.forEach(city => {
                if (city.temp < minTemp) {
                    minTemp = city.temp;
                }
                if (city.temp > maxTemp) {
                    maxTemp = city.temp;
                }
            });
            this.setState({
                minTemp,
                maxTemp
            });
            this.filterData(nextProps.cities);
        }
    }

	componentDidMount() {
	    this.filterData();
	}

	filterData(nextCities = null) {
	    const dataToFilter = nextCities || this.props.cities;



	    this.setState({
            filtered: dataToFilter.filter(city => {
                return (city.temp >= this.state.temp) && (city.cloudIndex <= this.state.cloudIndex)
            }),
        });
    }

    changeTemp = ({target: {value}}) => {
        this.setState({
            temp: value
        }, this.filterData)
    };

    changeCloudIndex = ({target: {value}}) => {
        this.setState({
            cloudIndex: value
        }, this.filterData)
    };

	render() {
	    const {filtered, minTemp, maxTemp, temp, cloudIndex} = this.state;

		return (
			<div className="Filter">
                <form>
                    <label>
                        Filter temp: {temp}
                        <div>
                            <span>{minTemp}</span>
                            <input type="range"
                                   onChange={this.changeTemp}
                                   min={minTemp}
                                   max={maxTemp}
                                   value={temp}
                                   step={0.01}
                            />
                            <span>{maxTemp}</span>
                        </div>
                    </label>

                    <label>
                        Filter cloudiness by index: {cloudIndex}
                        <div>
                            <span>0</span>
                            <input type="range"
                                   onChange={this.changeCloudIndex}
                                   value={cloudIndex}
                                   min={0}
                                   max={100}
                            />
                            <span>100</span>
                        </div>

                    </label>

                </form>

                <Content cities={filtered}/>
            </div>
		)
	}

}

export default Filter;
