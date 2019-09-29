import React from 'react';

import Users from '../Data/Users';
import InstagramFeed from './InstagramFeed';

import PPic from '../../Images/profilepic.png';
import heart from '../../Images/heart.jpg';
import close from '../../Images/close.png';
import randomPic from '../../Images/randomPic.jpg';

import { connect } from 'react-redux';
import { likedUsers } from '../../Actions/Actions';

import './TimelineStyle.css';

class Timeline extends React.Component{
	constructor(){
		super()
		this.state = {
			count: 0,
			lovedUser: [],
			message: false,
		}
	}
	next = () => {
		if(this.state.count < Users.length - 1){
			this.setState({count: this.state.count + 1});
		} else {
			this.setState({count: 0});
		}
	}
	loved = (data) => {
		let array = [];
		let alreadyExists = false;
		for(let i = 0; i < this.props.likedUsersResponse.length; i++){
			if(this.props.likedUsersResponse[i].id === data.id){
				array.push(this.props.likedUsersResponse[i]);
				alreadyExists = true;
			} else {
				array.push(this.props.likedUsersResponse[i]);
			}
		}
		if(alreadyExists === false){
			array.push(data);
		}
		this.props.likedUsers(array);
	}
	message = () => {
		this.setState({message: true});
	}
	closeMessageModal = () => {
		this.setState({message: false});
	}


	display = () => {
		return(
			<div>
				<div className='matchBox color fontSize2'>{Users[(this.state.count)].name}</div>
				<div className='matchBox'>
					<img src={PPic} alt='pp' className='ppicClass'/>
					<div className='heartContainer' 
							onClick={()=>{this.loved(Users[(this.state.count)])}}>
						<img src={heart} alt='loveheart' className='loveheart'/>
					</div>
				</div>
				<div className='infoHolder'>
					<div className='matchTextBox fontSize color'>
						{Users[(this.state.count)].age}
					</div>
					<div className='lineBreak'></div>
					<div className='matchTextBox fontSize color'>
						{Users[(this.state.count)].sign}
					</div>
					<div className='lineBreak'></div>
					<div className='matchTextBox fontSize color'>
						{Users[(this.state.count)].location}
					</div>
				</div>

				<div style={{height: '20px'}}></div>

				<div className='infoHolder'>
					<div className='matchTextBox fontSize color'>
						{Users[(this.state.count)].bio}
					</div>
				</div>

				<div className='matchBox'>
					<img src={randomPic} alt='pp' className='ppicClass'/>
				</div>

				<div className='infoHolder'>
					<div className='matchTextBox fontSize color'>
						{Users[(this.state.count)].job}
					</div>
				</div>
			</div>
		)
	}
	render(){
		return(
			<div className='matchesBackdrop width'>
				<div className='matchOuterBox'>
					{this.display()}
				</div>
				<div style={{height: '20px'}}></div>


				<div className='nextProfileButton' onClick={this.next}>
					<img src={close} alt='close' style={{width: '32px'}}/>
				</div>

			</div>
		)
	}
}

const mapStateToProps = state => ({
	likedUsersResponse: state.redux.likedUsers,
})

export default connect(mapStateToProps, { likedUsers })(Timeline);



