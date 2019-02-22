import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import CityList from './CityList'
import axios from 'axios';
import config from './config';
import FilteredContent from "./FilteredContent";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			cities: [
				{
					name: 'Cherkasy'
				},
				{
					name: 'Zolotonosha'
				},
				{
					name: 'Smila'
				},
				{
					name: 'Bangkok'
				}]
		}
	}

	componentDidMount() {
		this.state.cities.forEach(city => this.getInfo(city));
	}

	addCity = (name) => {
		const city = {
			name
		};
		this.setState({
			cities: [...this.state.cities, city]
		}, () => {
			this.getInfo(city);
		});
	};

	render() {
		return (
			<div className="App">
				<CityList cities={this.state.cities} onSubmit={this.addCity}/>
                <FilteredContent cities={this.state.cities}/>


				{/*<Content cities={this.state.cities}/>*/}
			</div>
		);
	}

	async getInfo(city) {
		const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=${config.weatherAppId}&units=metric`);


		city.temp = data.main.temp;
		city.cloudIndex = data.clouds.all;

		this.setState({
			cities: [...this.state.cities]
		});
	}
}

export default App;
