import React from 'react';

import './DropdownStyle.css';

class Dropdown extends React.Component{
	constructor(){
		super()
		this.state = {
			show: false,
			placeholder: '',
			input: '',
		}
	}
	componentDidMount() {
		if(this.props.input !== undefined){
			this.setState({placeholder: this.props.input});
		}
    	document.addEventListener('mousedown', this.handleClick, false);
  	}
  	componentWillUnmount() {
    	document.removeEventListener('mouseDown', this.handleClick, false);
  	}
  	handleClick = (e) => {
    	if(this.node) {
      		if(this.node.contains(e.target)){
      		} else {
      			this.setState({show: false});
      			this.setState({rotate: 0});
      		}
    	}
  	}
	clicked = () => {
		this.setState({show: !this.state.show});
	}
	clickedItem = (data) => {
		this.setState({show: false});
		this.setState({placeholder: ''});
		this.setState({input: data});
		this.props.output && this.props.output(data);
	}


	resultsDisplay = () => {
		let array = [];
		for(let i = 0; i < this.props.data.length; i++){
			array.push(
				<div key={i} className='dropdownItem' onClick={()=>{this.clickedItem(this.props.data[i])}}>
					{this.props.data[i]}
				</div>
			)
		}
		return <div>{array}</div>;
	}
	results = () => {
		if(this.state.show === false){
			return null;
		} else {
			return(
				<div className='dropdown'>
					{this.resultsDisplay()}
				</div>
			)
		}
	}
	render(){
		return(
			<div ref={node => this.node = node}>
				<div className='dropdownBox' onClick={this.clicked}>
					<div className='placeholder'>{this.state.placeholder}</div>
					{this.state.input}
				</div>
				{this.results()}
			</div>
		)
	}
}

export default Dropdown;