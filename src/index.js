import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';

import { appReducer } from './reducers/AppReducer';
import LoginPage from './components/LoginPage';
import MailboxPage from './components/MailboxPage';

const store = createStore(
	appReducer,
	applyMiddleware(thunkMiddleware));

render(<Router>
		  <Provider store={store}>
			  <Switch>
			    <Route exact path='/login' component={LoginPage} />
		    	<Route path='/mailbox' component={MailboxPage} />
			  </Switch>
		  </Provider>
	</Router>,
	document.getElementById('root')
);
