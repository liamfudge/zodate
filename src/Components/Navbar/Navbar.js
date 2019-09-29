import React from 'react';

import { connect } from 'react-redux';
import { nav } from '../../Actions/Actions';

import home from '../../Images/home.png';
import heartNav from '../../Images/heart-nav.png';
import message from '../../Images/message.png';
import settings from '../../Images/settings.jpg';

import './NavBarStyle.css';

class Navbar extends React.Component{
	clicked = (input) => {
		this.props.nav(input);
	}
	render(){
		return(
			<div className='navBar width'>
				<div className='navItemBox' onClick={()=>{this.clicked('home')}}>
					<img src={home} alt='loveheart' className='navIcon'/>
				</div>
				<div className='navItemBox'	onClick={()=>{this.clicked('likes')}}>
					<img src={heartNav} alt='loveheart' className='navIcon'/>
				</div>
				<div className='navItemBox' onClick={()=>{this.clicked('matches')}}>
					<img src={message} alt='loveheart' className='navIcon'/>
				</div>
				<div className='navItemBox' onClick={()=>{this.clicked('settings')}}>
					<img src={settings} alt='loveheart' className='navIcon'/>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	navResponse: state.redux.nav,
})

export default connect(mapStateToProps, { nav })(Navbar);