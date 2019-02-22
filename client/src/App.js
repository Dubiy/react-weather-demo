import React, {Component} from 'react';
import './App.scss';
import CityList from './components/CityList/CityList'
import axios from 'axios';
import config from './config/config';
import Filter from "./components/Filter/Filter";
import Header from "./components/Header/Header";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			cities: [
				{
					name: 'Cherkasy'
				},
                {
                    name: 'Bangkok'
                },
                {
                    name: 'Ankara'
                }

				]
		}
	}

	async componentDidMount() {
		this.state.cities.forEach(city => this.getInfo(city));

		console.log(await (await fetch('/api/data')).json());
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
                <Header />
                <div className="App-container">
                    <CityList cities={this.state.cities} onSubmit={this.addCity}/>
                    <Filter cities={this.state.cities}/>
                </div>
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
