import React from 'react';

import PPic from '../../Images/profilepic.png';
import edit from '../../Images/edit.svg';

import { connect } from 'react-redux';

class Settings extends React.Component{
	constructor(){
		super()
		this.state = {
			edit: false,
			name: '',
			bio: '',
			job: '',
		}
	}
	componentDidMount(){
		this.setState({
			name: this.props.registeredUserResponse.name,
			bio: this.props.registeredUserResponse.bio,
			job: this.props.registeredUserResponse.job,
		})
	}
	edit = () => {
		this.setState({edit: !this.state.edit});
	}
	input = (e, state) => {
		this.setState({[state]: e.target.value});
	}
	render(){
		if(this.state.edit === false){
			return(
				<div className='matchesBackdrop width'>
					<div className='matchBox fontSize'>
						<div className='matchesHeading'>
							Settings
						</div>

						<div className='matchBox'>
							<img src={PPic} alt='pp' className='ppicClass'/>
						</div>

						<div style={{height: '10px'}}></div>
						<div className='infoHolder'>
							<div className='matchTextBox'>
								{this.props.registeredUserResponse.name}
							</div>
						</div>

						<div style={{height: '10px'}}></div>
						<div className='infoHolder'>
							<div className='matchTextBox'>
								{this.props.registeredUserResponse.bio}
							</div>
						</div>

						<div style={{height: '10px'}}></div>
						<div className='infoHolder'>
							<div className='matchTextBox'>
								{this.props.registeredUserResponse.job}
							</div>
						</div>
					</div>
					<div className='nextProfileButton' onClick={this.next}>
						<img src={edit} alt='close' style={{width: '32px'}} onClick={this.edit}/>
					</div>
				</div>
			)
		} else {
			return(
				<div className='matchesBackdrop width'>
					<div className='matchBox fontSize'>
						<div className='matchesHeading'>
							Settings
						</div>

						<div className='matchBox'>
							<img src={PPic} alt='pp' className='ppicClass'/>
						</div>

						<div style={{height: '10px'}}></div>
						<div className='infoHolder'>
							<div className='matchTextBox fontSize'>
								<input onChange={(e)=>{this.input(e, 'name')}}
									value={this.state.name}
									className='input fontSize'/>
							</div>
						</div>

						<div style={{height: '10px'}}></div>
						<div className='infoHolder'>
							<div className='matchTextBox fontSize'>
								<input onChange={(e)=>{this.input(e, 'bio')}}
									value={this.state.bio}
									className='input fontSize'/>
							</div>
						</div>

						<div style={{height: '10px'}}></div>
						<div className='infoHolder'>
							<div className='matchTextBox fontSize'>
								<input onChange={(e)=>{this.input(e, 'job')}}
									value={this.state.job}
									className='input fontSize'/>
							</div>
						</div>

					</div>
					<div className='flexCenter'>
						<button onClick={this.edit} className='signinButton fontSize'>Update</button>
					</div>

					<div style={{height: '10px'}}></div>

				</div>
			)
		}
	}
}

const mapStateToProps = state => ({
	registeredUserResponse: state.redux.registeredUser,
})

export default connect(mapStateToProps, {})(Settings);



