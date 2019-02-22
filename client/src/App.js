import React, {Component} from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Weather from "./components/Weather/Weather";
import {Route} from "react-router-dom";
import About from "./components/About/About";
import Page from "./components/Page/Page";

class App extends Component {
	render() {
		return (
			<div className="App">
                <Header />
                <div className="App-container">
                    <Route exact path="/" component={Weather} />
                    <Route exact path="/page" component={Page} />
                    <Route exact path="/about" component={About} />
                </div>
			</div>
		);
	}
}

export default App;
