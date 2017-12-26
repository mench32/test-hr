import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Project from 'components/Project';
import s from './ListOfProjects.styl';

export default class ListOfProjects extends Component {
	static propTypes = {
		projects: PropTypes.array
	};

	render() {
		const { projects, closeProject, openProject, deleteProject, closeVacancy, openVacancy, deleteVacancy, addVacancy } = this.props;

		return (
			<div className={s.block}>
				{ projects.map(project => <Project key={project.id} {...project} {...{ closeProject, openProject, deleteProject, closeVacancy, openVacancy, deleteVacancy, addVacancy }}/>) }
			</div>
		);
	}
}
