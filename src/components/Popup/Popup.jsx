import React, { Component } from 'react';
import s from './Popup.styl';

export default class Popup extends Component {
	render() {
		const { children, title, onClose } = this.props;
		return (
			<div className={s.block}>
				<div className={s.back} onClick={onClose}></div>
				<div className={s.window}>
					<div className={s.header}>
						<div className={s.title}>{title}</div>
						<div className={s.close} onClick={onClose}/>
					</div>
					{children}
				</div>
			</div>
		);
	}
}
