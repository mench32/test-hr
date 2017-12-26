import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Projects from 'components/Projects';
import {
	closeProject,
	openProject,
	deleteProject,
	addProject,
	closeVacancy,
	openVacancy,
	deleteVacancy,
	addVacancy
} from 'actions/projectActions';

class ProjectsContainer extends Component {
	render() {
		return <Projects {...this.props}/>;
	}
}

const mapStateToProps = ({ projects }) => ({ projects });

const mapDispatchToProps = (dispatch) => ({
	closeProject: bindActionCreators(closeProject, dispatch),
	openProject: bindActionCreators(openProject, dispatch),
	deleteProject: bindActionCreators(deleteProject, dispatch),
	addProject: bindActionCreators(addProject, dispatch),
	closeVacancy: bindActionCreators(closeVacancy, dispatch),
	openVacancy: bindActionCreators(openVacancy, dispatch),
	deleteVacancy: bindActionCreators(deleteVacancy, dispatch),
	addVacancy: bindActionCreators(addVacancy, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsContainer);
