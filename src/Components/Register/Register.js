import React from 'react';

import { Redirect } from 'react-router-dom';
import { InjectionTest } from '../../Tools/InjectionTest';

import { Link } from 'react-router-dom';

class Register extends React.Component{
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
			this.register();
		}
	}
	register = () => {
		if(this.state.email.value === '' || this.state.password.value === ''){
			this.setState({warning: 'please fill in both fields'});
		} else {
			this.setState({warning: ''});
			this.setState({redirect: true});
		}
	}
	render(){
		if(this.state.redirect === true){
			return <Redirect push to='/userinfo' />;
		}
		return(
			<div className='centeredBox'>
				<div className='heading color'>Register</div>
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
					<Link to='/signin' className='smallLinkText'>Got an account? Log-in here</Link>
				</div>
				<div style={{height: '20px'}}></div>
				<button onClick={this.register} className='button fontSize'>Register</button>
				<div className='warningText'>{this.state.warning}</div>
			</div>
		)
	}
}

export default Register;