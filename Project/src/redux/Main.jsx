import React from 'react';
import App from './App.jsx'
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import userReducer from './feature/user.jsx';
import themeReducer from './feature/theme.jsx';

function Main(){
	const store = configureStore({
		reducer: {
			user: userReducer,
			theme: themeReducer
		}
	});
	return(
	  	<Provider store={store}>
	    	<App />
		</Provider>
	);
}

export default Main;