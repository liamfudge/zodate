import React from 'react';
import './App.css';

import{ Provider } from 'react-redux';
import Store from './Store';

import Main from './Components/Main';

function App() {
	return (
		<Provider store={Store}>
			<div className='outerBox'>
				<Main />
			</div>
		</Provider>
	);
}

export default App;