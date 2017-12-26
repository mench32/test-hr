import React, { Component } from 'react';
import FlatButton from 'ui/FlatButton';
import ListOfVacancies from 'components/ListOfVacancies';
import Card from 'ui/Card';
import Add from 'components/Add';
import Popup from 'components/Popup';
import { declOfVacancy } from '../../utils';
import cn from 'classnames';
import s from './Project.styl';

const buttonText = {
	0: "Закрыть проект",
	1: "Открыть проект"
}

export default class Project extends Component {
	state = {
		expanded: false,
		showPopup: false,
	};

	handleExpand = () => this.setState({
		expanded: !this.state.expanded
	});

	handleChangeStatus = () => {
		const { closeProject, openProject, status, id } = this.props;
		if (status) {
			openProject(id);
		} else {
			closeProject(id);
		}
	}

	handleDelete = () => {
		const { deleteProject, id } = this.props;

		deleteProject(id);
	}

	handleClosePopup = () => this.setState({
		showPopup: false
	})

	handleOpenPopup = () => this.setState({
		showPopup: true
	})

	handleCreateVacancy = (name) => {
		if (name) {
			this.props.addVacancy(this.props.id, name);
		}
		this.handleClosePopup();
	}

	render() {
		const { title, vacancies, status, id, closeVacancy, openVacancy, deleteVacancy, addVacancy } = this.props;
		const count = this.props.count || vacancies.length;
		const { expanded, showPopup } = this.state;

		return (
			<div className={cn(s.block, {[s.expanded]: expanded})}>
				{
					showPopup &&
						<Popup title="Новая вакансия" onClose={this.handleClosePopup}>
							<Add {...{ onCreate: this.handleCreateVacancy, placeholder: 'Название вакансии' }} />
						</Popup>
				}

				<Card {...{ expanded }}>
					<div className={s.content}>
						<h2 className={cn(s.title,{ [s.close]: !!status})} onClick={this.handleExpand}>{title}</h2>

						<div className={s.subtitle}>
							<div className={s.left}>
								<span className={s.count}>{declOfVacancy(count)}</span>
								{
									status
									? <div className={s.done}>Проект закрыт, сотрудники наняты</div>
									: <FlatButton accent onClick={this.handleOpenPopup}>Добавить вакансию</FlatButton>
								}
							</div>
							<div className={s.right}>
								<FlatButton
									accent={!!status}
									onClick={this.handleChangeStatus}
								>
									{buttonText[status]}
								</FlatButton>
								<FlatButton onClick={this.handleDelete}>Удалить</FlatButton>
							</div>
						</div>
						<ListOfVacancies {...{ vacancies, expanded, id, closeVacancy, openVacancy, deleteVacancy }}/>
					</div>
				</Card>
			</div>
		);
	}
}
