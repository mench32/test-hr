import events from 'constants/events';

export const addProject = (name) => (dispatch) => dispatch({
	type: events.PROJECT_ADD,
	name
});

export const deleteProject = (id) => (dispatch) => dispatch({
	type: events.PROJECT_DELETE,
	id
});

export const closeProject = (id) => dispatch => dispatch({
	type: events.PROJECT_CLOSE,
	id
});

export const openProject = (id) => (dispatch) => dispatch({
	type: events.PROJECT_OPEN,
	id
});

export const openVacancy = (projectId, vacancyId) => (dispatch) => dispatch({
	type: events.VACANCY_OPEN,
	data: { projectId, vacancyId }
});

export const closeVacancy = (projectId, vacancyId) => (dispatch) => dispatch({
	type: events.VACANCY_CLOSE,
	data: { projectId, vacancyId }
});

export const deleteVacancy = (projectId, vacancyId) => (dispatch) => dispatch({
	type: events.VACANCY_DELETE,
	data: { projectId, vacancyId }
});

export const addVacancy = (id, name) => (dispatch) => dispatch({
	type: events.VACANCY_ADD,
	data: { id, name }
});
