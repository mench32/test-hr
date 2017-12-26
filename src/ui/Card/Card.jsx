import React, { Component } from 'react';
import cn from 'classnames';
import s from './Card.styl';

export default class Card extends Component {
	render() {
		const { expanded } = this.props;
		const className = cn(s.block, {[s.expanded]: expanded});
		return (
			<div {...{ className }}>{this.props.children}</div>
		);
	}
}
