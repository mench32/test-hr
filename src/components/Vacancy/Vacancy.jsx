import React, { Component } from 'react';
import FlatButton from 'ui/FlatButton';
import cn from 'classnames';
import s from './Vacancy.styl';

const statusTitle = {
	0: 'Вакансия открыта, идет подбор кандидатов',
	1: 'Вакансия закрыта, сотрудник нанят'
};
const buttonText = {
	0: 'Закрыть вакансию',
	1: 'Открыть вакансию'
};

export default class Vacancy extends Component {
	handleDelete = () => {
		const { deleteVacancy, id, projectId } = this.props;

		deleteVacancy(projectId, id);
	}

	handleChangeStatus = () => {
		const { status, id, projectId, closeVacancy, openVacancy } = this.props;
		if (status) {
			openVacancy(projectId, id);
		} else {
			closeVacancy(projectId, id);
		}
	}

	render() {
		const { title, status } = this.props;
		const statusClass = cn(s.status, { [s.done]: !!status })
		return (
			<div className={s.block} >
				<h4>{title}</h4>
				<div className={s.footer}>
					<div className={statusClass}>{statusTitle[status]}</div>
					<div className={s.right}>
						<FlatButton onClick={this.handleChangeStatus} accent={!!status}>{buttonText[status]}</FlatButton>
						<FlatButton onClick={this.handleDelete}>Удалить</FlatButton>
					</div>
				</div>
			</div>
		);
	}
}
