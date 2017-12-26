import React, { Component } from 'react';
import Button from 'ui/Button';
import Input from 'ui/Input';
import Checkbox from 'ui/Checkbox';
import s from './TopBar.styl';

export default class TopBar extends Component {
	render() {
		const { search, onSearch, onAddProject, onChangeStatus } = this.props;
		return (
			<div className={s.block}>
				<div className={s.left}>
					<div className={s.input}>
						<Input wide value={search} onChange={onSearch} />
					</div>
					<div className={s.checkbox}>
						<Checkbox label="Только открытые" onChange={onChangeStatus} />
					</div>
				</div>
				<div className={s.right}>
					<Button wide onClick={onAddProject}>Добавить проект</Button>
				</div>
			</div>
		);
	}
}
