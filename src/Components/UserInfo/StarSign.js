import React from 'react';

const StarSigns = [
	{name: 'aries', start: '03/21', end: '04/19'},
	{name: 'taurus', start: '04/20', end: '05/20'},
	{name: 'gemini', start: '05/21', end: '06/21'},
	{name: 'cancer', start: '06/22', end: '07/22'},
	{name: 'leo', start: '07/23', end: '08/22'},
	{name: 'virgo', start: '08/23', end: '09/22'},
	{name: 'libra', start: '09/23', end: '10/23'},
	{name: 'scorpio', start: '10/24', end: '11/21'},
	{name: 'sagittarius', start: '11/22', end: '12/21'},
	{name: 'capricorn', start: '12/22', end: '01/19'},
	{name: 'aquarius', start: '01/20', end: '02/18'},
	{name: 'pisces', start: '02/19', end: '03/120'},
]

class StarSign extends React.Component{
	constructor(){
		super()
		this.state = {
			sign: '',
		}
	}
	componentDidMount(){
		this.checkSign(this.props.dob);
	}
	checkSign = (dob) => {
		const month = dob.slice(0,2);
		const day = dob.slice(3,5);
		let sign = '';
		for(let i = 0; i < StarSigns.length; i++){
			if(month === StarSigns[i].start.slice(0,2)){
				if(Number(day) > Number(StarSigns[i].end.slice(3,5))){
					sign = StarSigns[i].name;
				}
			}
			if(month === StarSigns[i].end.slice(0,2)){
				if(Number(day) < Number(StarSigns[i].end.slice(3,5))){
					sign = StarSigns[i].name;

				}
			}
		}
		this.setState({sign: sign});
		this.props.output && this.props.output(sign);
	}
	render(){
		return(
			<div className='flexCenter starsign'>
				{this.state.sign}
			</div>
		)
	}
}

export default StarSign;