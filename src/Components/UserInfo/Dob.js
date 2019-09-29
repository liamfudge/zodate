import React from 'react';

import './UserInfoStyle.css';

class Dob extends React.Component{
	constructor(){
		super()
		this.state = {
			month: '',
			day: '',
			year: '',
		}
	}
	month = (e) => {
		this.setState({month: e.target.value});
		if(e.target.value.length > 1){
			var object = this.refs.DD;
			object.focus();
		}
		setTimeout(()=>{
			this.sendProps();
		},20);
	}
	day = (e) => {
		this.setState({day: e.target.value});
		if(e.target.value.length > 1){
			var object = this.refs.YYYY;
			object.focus();
		}
		setTimeout(()=>{
			this.sendProps();
		},20);
	}
	year = (e) => {
		this.setState({year: e.target.value});
		setTimeout(()=>{
			this.sendProps();
		},20);
	}
	sendProps = () => {
		if(this.state.month.length === 2 && this.state.day.length === 2 &&
			this.state.year.length === 4){
			this.props.output && this.props.output(String(this.state.month + '/' +
													this.state.day + '/' +
													this.state.year))
		}
	}
	render(){
		return(
			<div className='dobBox'>
				<input placeholder='MM' onChange={this.month} maxLength={2} className='input'/>
				<input placeholder='DD' onChange={this.day} ref='DD' maxLength={2} className='input'/>
				<input placeholder='YYYY' onChange={this.year} ref='YYYY' maxLength={4} className='input'/>
			</div>
		)
	}
}

export default Dob;