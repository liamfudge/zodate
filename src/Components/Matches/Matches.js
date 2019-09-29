import React from 'react';

import MessageComponent from '../Messages/MessageComponent';

import PPic from '../../Images/profilepic.png';
import arrow from '../../Images/arrow.png';

import { connect } from 'react-redux';
import './MatchesStyle.css';

class Likes extends React.Component{
	constructor(){
		super()
		this.state = {
			lovedUser: [],
			message: false,
			messages: [],
		}
	}
	messageUser = (data) => {
		this.setState({lovedUser: data, message: true});
	}
	closeMessageModal = () => {
		this.setState({lovedUser: [], message: false});
	}
	messageArray = (data) => {
		let array = [];
		for(let i = 0; i < this.state.messages.length; i++){
			if(this.state.messages[i].id === data[0].id){

			} else {
				array.push(this.state.messages[i]);
			}
		}
		for(let j = 0; j < data.length; j++){
			array.push(data[j]);
		}
		this.setState({messages: array});
	}



	latestMessage = (id) => {
		let array = [];
		for(let i = 0; i < this.state.messages.length; i++){
			if(this.state.messages[i].id === id){
				array.push(this.state.messages[i]);
			}
		}
		if(array.length > 0){
			return <div className='matchUsermessageMini'>{array[array.length - 1].message}</div>
		} else {
			return <div className='matchUsermessageMini'>why don't you say hi...</div>
		}
	}
	messageDisplay = () => {
		let array = [];
		for(let i = 0; i < this.props.likedUsersResponse.length; i++){
			array.push(
				<div key={i} className='matchUserView' onClick={()=>{this.messageUser(this.props.likedUsersResponse[i])}}>
					<img src={PPic} alt='pp' className='ppicClassMini'/>
					<div>
						{this.props.likedUsersResponse[i].name}
						{this.latestMessage(this.props.likedUsersResponse[i].id)}
						
					</div>
				</div>
			)
		}
		return <div>{array}</div>
	}
	render(){
		if(this.state.message === false){
			return(
				<div className='matchesBackdrop width'>
					<div className='matchBox fontSize'>
						<div className='matchesHeading'>
							Matches
						</div>
						<div>
							{this.messageDisplay()}
						</div>
					</div>
				</div>
			)
		} else {
			return(
				<div className='matchesBackdrop width'>
					<div className='matchBox fontSize'>
						<div className='matchesHeading' onClick={this.closeMessageModal}>
							<img src={arrow} alt='pp' className='backArrow'/>
							<img src={PPic} alt='pp' className='ppicClassMini2'/>
							{this.state.lovedUser.name}
						</div>
						<MessageComponent close={this.closeMessageModal} lovedUser={this.state.lovedUser}
								output={this.messageArray} messages={this.state.messages}/>
					</div>
				</div>
			)
		}
	}
}

const mapStateToProps = state => ({
	likedUsersResponse: state.redux.likedUsers,
})

export default connect(mapStateToProps, {})(Likes);