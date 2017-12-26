import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import * as s from './Button.styl';

export default class Button extends Component {
	static propTypes = {
		onClick: PropTypes.func,
		wide: PropTypes.bool
	};

	render() {
		const { wide, children, onClick } = this.props;
		const className = cn(s.block, {
			[s.wide]: wide
		});

		return (
			<button {...{ className, onClick }}>{children}</button>
		);
	}
}
