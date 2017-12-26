import React, { Component } from 'react';
import cn from 'classnames';
import * as s from './Input.styl';

export default class Input extends Component {
	render() {
		const { wide, ...props } = this.props;
		const className = cn(s.block, {
			[s.wide]: wide
		});

		return (
			<div {...{ className }}>
				<input
					{...props}
					className={s.input}
					type="text"
				/>
				{/* <div className={s.info}>Текст ошибки</div> */}
			</div>
		);
	}
}
