import React, { Component } from 'react';
import s from './Select.styl';


export default class  extends Component {
	state = {
		open: false
	}

	componentWillMount() {

	}

	componentWillUnmount() {

	}
	handleClose = () => {
		this.setState({ open: false })
	};

	handleToggle = () => {
		 this.setState({ open: !this.state.open })
	};

	handleSelect = () => alert(1);

	render() {
		return (
			<div className={s.block} tabIndex="-1" onBlur={this.handleClose} contentEditable={false}>
				<div onClick={this.handleToggle} className={cn(s.input, {[s.open]: this.state.open})} >Input text 1</div>
				<div className={s.list}>
					{
						this.state.open &&
						<div>
							<div onClick={this.handleSelect} className={s.item}>Input text 2</div>
							<div onClick={this.handleSelect} className={s.item}>Input text 3</div>
							<div onClick={this.handleSelect} className={s.item}>Input text 4</div>
							<div onClick={this.handleSelect} className={s.item}>Input text 5</div>
							<div onClick={this.handleSelect} className={s.item}>Input text 6</div>
						</div>

					}
				</div>
			</div>
		);
	}
}
