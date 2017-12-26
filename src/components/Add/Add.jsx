import React, { Component } from 'react';
import Input from 'ui/Input';
import Button from 'ui/Button';

import s from './Add.styl';

export default class NewProject extends Component {
	state = {
		name: ''
	}

	handleChange = (event) => this.setState({
		name: event.target.value
	});

	render() {
		const { name } = this.state;
		return (
			<div className={s.block}>
				<div className={s.input}>
					<Input
						wide
						autoFocus
						value={this.state.name}
						onChange={this.handleChange}
						placeholder="Название проекта"
					/>
				</div>
				<div className={s.button}>
					<Button wide onClick={() => this.props.onCreate(name)}>Создать</Button>
				</div>
			</div>
		);
	}
}
