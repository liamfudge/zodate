import React from 'react';
import FacebookLogin from 'react-facebook-login';

import { Redirect } from 'react-router-dom';
import { InjectionTest } from '../../Tools/InjectionTest';
import Users from '../Data/Users';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { registeredUser } from '../../Actions/Actions';

class Signin extends React.Component{
	constructor(){
		super()
		this.state = {
			email: {
				value: '',
				error: false
			},
			password: {
				value: '',
				error: false
			},
			warning: '',
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
	signin = () => {
		let success = false;
		if(this.state.email.value === '' || this.state.password.value === ''){
			this.setState({warning: 'please fill in both fields'});
		} else {
			for(let i = 0; i < Users.length; i++){
				if(Users[i].email === this.state.email.value && Users[i].password === this.state.password.value){
					success = true;
					this.props.registeredUser(Users[i]);
				}
			}
			if(success === true){
				this.setState({warning: ''});
				this.setState({redirect: true});
			} else {
				this.setState({warning: 'please check credentials and try again'});
			}
		}
	}

	componentClicked = () => {
		
	}
	responseFacebook = (response) => {
		console.log(response);
	}

	render(){
		if(this.state.redirect === true){
			return <Redirect push to='/userhome' />;
		}
		return(
			<div className='centeredBox'>
				<div className='heading color'>Signin</div>
				<div style={{height: '20px'}}></div>

				<div>
					<input type='email' className='input color fontSize' placeholder='email...'
							onChange={(input, type) => (this.checkingInput(input, 'email'))}
							onKeyDown={this.checkEnterKey}>
					</input>
				</div>
				<div style={{height: '10px'}}></div>
				<div>
					<input type='password' className='input color fontSize' placeholder='password...'
							onChange={(input, type) => (this.checkingInput(input, 'password'))}
							onKeyDown={this.checkEnterKey}>
					</input>
				</div>

				<div style={{height: '20px'}}></div>
				<div>
					<Link to='/register' className='smallLinkText'>No account? Register here</Link>
				</div>
				<div style={{height: '20px'}}></div>
				<button onClick={this.signin} className='button fontSize'>Signin</button>
				<div className='warningText'>{this.state.warning}</div>
				<FacebookLogin
						appId="1088597931155576"
						autoLoad={true}
						fields="name,email,picture"
						onClick={this.componentClicked}
						callback={this.responseFacebook} />
			</div>
		)
	}
}

export default connect(null, { registeredUser })(Signin);


