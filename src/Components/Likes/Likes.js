import React from 'react';

import PPic from '../../Images/profilepic.png';

import { connect } from 'react-redux';

class Likes extends React.Component{

	displayLikes = () => {
		let array = [];
		for(let i = 0; i < this.props.likedUsersResponse.length; i++){
			array.push(
				<div key={i} className='matchUserView'>
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

export default connect(mapStateToProps, {})(Likes);