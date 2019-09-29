import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Register from './Register/Register';
import UserInfo from './UserInfo/UserInfo';
import Signin from './Signin/Signin';
import UserHome from './UserHome/UserHome';

class Main extends React.Component{
	render(){
		return(
			<main>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/userinfo' component={UserInfo} />
					<Route path='/register' component={Register} />
					<Route path='/signin' component={Signin} />
					<Route path='/userhome' component={UserHome} />
					<Route path='*' component={PageNotFound} />
				</Switch>
			</main>
		)
	}
}

export default Main;


const PageNotFound = () => {
	return(
		<div>
			<div className='spacer50'></div>
			<div className='spacer50'></div>
			404 NOT FOUND
		</div>
	)
}
