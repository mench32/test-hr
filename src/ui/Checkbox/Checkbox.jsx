import React, { Component } from 'react';
import s from './Checkbox.styl';

export default class Checkbox extends Component {
	render() {
		const { label, onChange } = this.props;
		return (
			<label className={s.block}>
				<input className={s.input} type="checkbox" onChange={onChange} />
				<span className={s.box} />
				<span className={s.label}>{label}</span>
			</label>
		);
	}
}
