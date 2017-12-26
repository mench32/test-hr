import React, { Component } from 'react';
import TopBar from 'components/TopBar';
import Add from 'components/Add';
import Popup from 'components/Popup';
import ListOfProjects from 'components/ListOfProjects';
import s from './Projects.styl';

const filter = (projects, filter, isActive) => {
	if (!filter && !isActive) {
		return projects;
	}

	filter = filter.toLowerCase();

	return projects
		.map(project => {
			const obj = Object.assign({}, project);
			obj.count = obj.vacancies.length;
			obj.vacancies = obj.vacancies
				.filter(vacancy => {
					if (isActive) {
						return vacancy.title.toLowerCase().indexOf(filter) !== -1 && vacancy.status === 0;
					} else {
						return vacancy.title.toLowerCase().indexOf(filter) !== -1;
					}
				});
			return obj;
		})
		.filter(project => project.vacancies && project.vacancies.length);
};

export default class App extends Component {
	state = {
		search: '',
		isActive: false,
		showPopup: false
	}

	handleClosePopup = () => this.setState({
		showPopup: false
	})

	handleCreateProject = (name) => {
		if (name) {
			this.props.addProject(name);
		}
		this.handleClosePopup();
	}

	render() {

		const { search, isActive, showPopup } = this.state;
		const {
			closeProject,
			openProject,
			deleteProject,
			closeVacancy,
			openVacancy,
			deleteVacancy,
			addVacancy,
		} = this.props;
		const projects = filter(this.props.projects, search, isActive);

		return (
			<div className={s.block}>
				{
					showPopup &&
						<Popup title="Новый проект" onClose={this.handleClosePopup}>
							<Add {...{ onCreate: this.handleCreateProject, placeholder: 'Название проекта' }} />
						</Popup>
				}
				<TopBar
					{...{ search }}
					onAddProject={() => this.setState({
						showPopup: true
					})}

					onChangeStatus={event => {
						this.setState({
							isActive: event.target.checked
						});
					}}

					onSearch={event => {
						const search = event.target.value;

						this.setState({ search });
					}}
				/>
				<ListOfProjects {...{ projects, closeProject, openProject, deleteProject, closeVacancy, openVacancy, deleteVacancy, addVacancy }} />
			</div>
		);
	}
}
