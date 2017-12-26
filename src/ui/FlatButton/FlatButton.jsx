import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import * as s from './FlatButton.styl';

export default class FlatButton extends Component {
	static propTypes = {
		onClick: PropTypes.func
	};

	render() {
		const { children, onClick, accent } = this.props;
		const className = cn(s.block, {
			[s.accent]: accent
		});

		return (
			<button {...{ className, onClick }}>{children}</button>
		);
	}
}
