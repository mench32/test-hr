import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from 'store';
import ProjectsContainer from 'containers/ProjectsContainer';
import './App.styl';

export default class App extends Component {
	render() {
		return (
			<Provider {...{ store }}>
				<ProjectsContainer />
			</Provider>
		);
	}
}
