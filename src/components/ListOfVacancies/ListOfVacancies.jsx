import React, { Component } from 'react';
import CSSTransition from 'react-addons-css-transition-group'; // ES6
import Card from 'ui/Card';
import FlatButton from 'ui/FlatButton';
import Vacancy from 'components/Vacancy';
import s from './ListOfVacancies.styl';

export default class ListOfVacancies extends Component {


	render() {
		const { vacancies, expanded, id, closeVacancy, openVacancy, deleteVacancy } = this.props;

		return (
			<div className={s.block}>
				{
					expanded && !!vacancies &&
					<div className={s.list}>
						{
							vacancies.map(vacancy => {
								return (
									<Vacancy
										key={vacancy.id}
										{...vacancy}
										projectId={id}
										{...{ closeVacancy, openVacancy, deleteVacancy }}
									/>
								);
							})
						}
					</div>
				}
			</div>
		);
	}
}
