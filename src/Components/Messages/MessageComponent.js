import React from 'react';

import './MessageStyle.css';

class MessageComponent extends React.Component{
	constructor(){
		super()
		this.state = {
			messages: [],
			input: '',
		}
	}
	componentDidMount(){
		let array = [];
		for(let i = 0; i < this.props.messages.length; i++){
			if(this.props.messages[i].id === this.props.lovedUser.id){
				array.push(this.props.messages[i]);
			}
		}
		this.setState({messages: array});
	}
	checkEnterKey = (e) => {
		if(e.key === 'Enter'){
			this.send();
		}
	}
	input = (e) => {
		this.setState({input: e.target.value});
	}
	send = () => {
		if(this.state.input !== ''){
			let array = [];
			for(let i = 0; i < this.state.messages.length; i++){
				array.push(this.state.messages[i]);
			}
			array.push({message: this.state.input, id: this.props.lovedUser.id});
			this.setState({messages: array});
			this.setState({input: ''});
			this.props.output && this.props.output(array);
		}
	}

	messageDisplay = () => {
		let array = [];
		for(let i = 0; i < this.state.messages.length; i++){
			array.push(
				<div key={i} className='flexRight'>
					<div className='messageBubble'>
						{this.state.messages[i].message}
					</div>
				</div>
			)
		}
		return <div>{array}</div>
	}
	render(){
		return(
			<div>
				<div className='messageDisplayBox color fontSize'>
					{this.messageDisplay()}
				</div>
				<div className='matchesHeading color' >
					<input onChange={this.input} value={this.state.input}
							onKeyDown={this.checkEnterKey} className='inputMessage color fontSize'/>
					<button onClick={this.send} className='sendMessageButton color fontSize'>>></button>
				</div>
			</div>
		)
	}
}

export default MessageComponent;