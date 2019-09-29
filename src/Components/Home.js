import React from 'react';

import { Link } from 'react-router-dom';

class Home extends React.Component{
	render(){
		return(
			<div className='centeredBox'>
				<div className='heading'>
					HOME
				</div>
				<Link to='/register'>Create Account</Link>
				<Link to='/signin'>Log-in</Link>
			</div>
		)
	}
}

export default Home;