import React from 'react';

import Timeline from '../Timeline/Timeline';
import Navbar from '../Navbar/Navbar';
import Likes from '../Likes/Likes';
import Matches from '../Matches/Matches';
import Settings from '../Settings/Settings';

import { connect } from 'react-redux';

class UserHome extends React.Component{
	render(){
		if(this.props.navResponse === 'home'){
			return(
				<div className='centeredBox'>
					<Timeline />

					<Navbar />
				</div>
			)
		} else if(this.props.navResponse === 'likes') {
			return(
				<div className='centeredBox'>
					<Likes />

					<Navbar />
				</div>
			)
		} else if(this.props.navResponse === 'matches') {
			return(
				<div className='centeredBox'>
					<Matches />

					<Navbar />
				</div>
			)
		} else {
			return(
				<div className='centeredBox'>
					<Settings />

					<Navbar />
				</div>
			)
		}
	}
}



const mapStateToProps = state => ({
	registeredUserResponse: state.redux.registeredUser,
	navResponse: state.redux.nav,
})

export default connect(mapStateToProps, {})(UserHome);