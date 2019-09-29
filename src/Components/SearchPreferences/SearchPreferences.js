import React from 'react';

import AgeSelector from './AgeSelector';

import './SearchPreferencesStyle.css';

class SearchPreferences extends React.Component{
	constructor(){
		super()
		this.state = {
			left: 0,
			right: 0,
			middle: 300,
			x: 0,
			min: 18,
			max: 100,
		}
	}
	_onMouseMove = (e) => {
		console.log(e.screenX);
		this.setState({x: e.screenX});
	}
	leftCircle = (event) => {
		
	}
	setMinAge = (data) => {
		this.setState({min: data.target.value});
	}
	setMaxAge = (data) => {
		this.setState({max: data.target.value});
	}

	render(){
		return(
			<div>
				<div className='sliderBorder'>
					<input type='range' min='18' max={this.state.max} step={1} value={this.state.min}
							onChange={this.setMinAge} className='slider1'
							/>
				
					<input type='range' min={this.state.min} max='100' value={this.state.max}
							onChange={this.setMaxAge} className='slider1'
							/>
				</div>
				<div className='flexCenter'>
					min age {this.state.min}
					max age {this.state.max}
				</div>
				<div style={{height: '40px'}}></div>
			</div>
		)
	}
}

export default SearchPreferences;




// age


