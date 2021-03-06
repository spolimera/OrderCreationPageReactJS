'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as reducers from './reducers';

import Routes from './Routes';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Routes />
            </Provider>
        );
    }
};

ReactDOM.render(<App />, document.getElementById('app'));
