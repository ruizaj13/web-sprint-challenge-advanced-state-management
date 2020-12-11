import React from "react";
import ReactDOM from "react-dom";
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import "./index.css";
import App from "./App";

const rootElement = document.getElementById("root");

import {reducer} from './reducers/index'

const store = createStore(reducer)

ReactDOM.render(
    <Provider>
        <App />
    </Provider>, 
    rootElement
);

//Task List:
//1. Add in all necessary components and libary methods.
//2. Create a store that includes thunk middleware support.
//3. Wrap the App component in a react-redux Provider element.