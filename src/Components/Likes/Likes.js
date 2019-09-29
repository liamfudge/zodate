import React from 'react';

import PPic from '../../Images/profilepic.png';

import { connect } from 'react-redux';
import { currentProfile, nav } from '../../Actions/Actions';

class Likes extends React.Component{
	clickedUser = (data) => {
		this.props.currentProfile(data.id);
		this.props.nav('home');
	}
	displayLikes = () => {
		let array = [];
		for(let i = 0; i < this.props.likedUsersResponse.length; i++){
			array.push(
				<div key={i} className='matchUserView' onClick={()=>{this.clickedUser(this.props.likedUsersResponse[i])}}>
					<img src={PPic} alt='pp' className='ppicClassMini'/>
					{this.props.likedUsersResponse[i].name}
				</div>
			)
		}
		return <div>{array}</div>
	}
	render(){
		return(
			<div className='matchesBackdrop width'>
				<div className='matchBox fontSize'>
					<div className='matchesHeading'>
						Your Likes
					</div>
					<div>
						{this.displayLikes()}
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	likedUsersResponse: state.redux.likedUsers,
})

export default connect(mapStateToProps, { currentProfile, nav })(Likes);