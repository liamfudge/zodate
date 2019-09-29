import React from 'react';

import { Redirect } from 'react-router-dom';
import { InjectionTest } from '../../Tools/InjectionTest';
import Dropdown from '../Dropdowns/Dropdown';

import Dob from './Dob';
import StarSign from './StarSign';

const gender = ['male', 'female'];

class UserInfo extends React.Component{
	constructor(){
		super()
		this.state = {
			name: {
				value: '',
				error: false
			},
			gender: '',
			dob: '',
			starsign: '',
			redirect: false
		}
	}
	checkingInput = (input, type) => {
		const correctInput = InjectionTest(input.target.value);
		if(correctInput === true){
			this.setState({[type]:{ value: input.target.value, error: false } });
		} else {
			this.setState({[type]:{ value: input.target.value, error: true } });
		}
	}
	checkEnterKey = (e) => {
		if(e.key === 'Enter'){
			this.signin();
		}
	}
	genderOutput = (data) => {
		this.setState({gender: data});
	}
	dob = (data) => {
		this.setState({dob: ''});
		setTimeout(()=>{
			this.setState({dob: data});
		},10);
	}
	starsign = (data) => {
		this.setState({starsign: data});
	}
	profilePicture = () => {

	}
	continueButton = () => {
		this.setState({redirect: true});
	}



	button = () => {
		if(this.state.name.value !== '' && this.state.gender !== '' && this.state.dob !== ''){
			return(
				<div>
					<button className='button fontSize' onClick={this.continueButton}>CONTINUE</button>
				</div>
			)
		} else {
			return(
				<div className='disabledButton fontSize'>
					CONTINUE
				</div>
			)
		}
	}
	starSign = () => {
		if(this.state.dob === ''){
			return <div className='starsign'></div>
		} else {
			return(
				<div>
					<StarSign dob={this.state.dob} output={this.starsign}/>
				</div>
			)
		}
	}
	render(){
		if(this.state.redirect === true){
			return <Redirect push to='/userhome' />;
		}
		return(
			<div className='centeredBox'>
				<div className='heading'>User info</div>


				<div style={{height: '20px'}}></div>
				<div className='flexCenter'>
					<input type='name' className='input fontSize' placeholder='name...'
							onChange={(input, type) => (this.checkingInput(input, 'name'))}
							onKeyDown={this.checkEnterKey}>
					</input>
				</div>

				<div style={{height: '16px'}}></div>
				<div className='flexCenter'>
					<Dropdown data={gender} output={this.genderOutput} input={'gender...'}/>
				</div>

				<div style={{height: '20px'}}></div>
				<Dob output={this.dob}/>
				{this.starSign()}

				<div style={{height: '20px'}}></div>
				{this.button()}
			</div>
		)
	}
}

export default UserInfo;

