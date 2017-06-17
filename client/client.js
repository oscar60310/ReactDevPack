import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from './store';
import Test from './component/Test';
require('./index.html');
const app = document.getElementById('app');
ReactDOM.render(
    <Provider store={store}>
        <Test />
    </Provider>, app);