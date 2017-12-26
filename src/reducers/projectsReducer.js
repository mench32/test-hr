import events from 'constants/events';

const toggleVacancyStatus = (state, projectId, vacancyId, status) => {
	const projectIndex = state.findIndex(project => project.id === projectId);
	const project = state[projectIndex] = { ...state[projectIndex] };
	const vacancyIndex = project.vacancies.findIndex(vacancy => vacancy.id === vacancyId);
	const vacancy = project.vacancies[vacancyIndex] = { ...project.vacancies[vacancyIndex] };

	vacancy.status = status;
	project.vacancies = [ ...project.vacancies ];

	return [ ...state ];

}

export default (state = null, action) => {

	switch (action.type) {
		case events.PROJECT_OPEN: {
			const projectIndex = state.findIndex(project => project.id === action.id);
			const project = state[projectIndex] = { ...state[projectIndex] };

			project.status = 0;

			return [ ...state ];
		}

		case events.PROJECT_CLOSE: {
			const projectIndex = state.findIndex(project => project.id === action.id);
			const project = state[projectIndex] = { ...state[projectIndex] };

			project.status = 1;
			project.vacancies = project.vacancies.map(vacancy => {
				vacancy.status = 1;
				return { ...vacancy };
			});

			return [ ...state ];
		}

		case events.PROJECT_ADD: {
			return state.concat({
				id: Date.now(),
				title: action.name,
				status: 0,
				vacancies: []
			})
		}

		case events.PROJECT_DELETE: {
			return state.filter(project => project.id !== action.id);
		}

		case events.VACANCY_CLOSE: {
			return toggleVacancyStatus(state, action.data.projectId, action.data.vacancyId, 1)
		}

		case events.VACANCY_OPEN: {
			return toggleVacancyStatus(state, action.data.projectId, action.data.vacancyId, 0)
		}

		case events.VACANCY_DELETE: {
			const projectIndex = state.findIndex(project => project.id === action.data.projectId);
			const project = state[projectIndex] = { ...state[projectIndex] };

			project.vacancies = project.vacancies.filter(vacancy => vacancy.id !== action.data.vacancyId)

			return [ ...state ]
		}

		case events.VACANCY_ADD: {
			const projectIndex = state.findIndex(project => project.id === action.data.id);
			const project = state[projectIndex] = { ...state[projectIndex] };

			project.vacancies = project.vacancies.concat({
				id: Date.now(),
				title: action.data.name,
				status: 0
			})

			return [ ...state ];
		}
	}

	return state;
};
