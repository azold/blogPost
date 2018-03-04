import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { reducer } from './Reducer';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import Main from './components/main.jsx'

const initialState = {
    posts: [
        {  title : 'My first blogpost', text: "Hello this is the first blogpost", }
    ],
    newPost: { title: "",text: "" }
};

const history = createHistory();

const store = createStore(reducer,initialState);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Main />
        </ConnectedRouter>
    </Provider>, 
    document.getElementById('root')
);