import "normalize.css/normalize.css";
import "./styles/styles.scss";
import ReactDOM from "react-dom";
import React from 'react';
import { Provider } from 'react-redux'; 
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import "react-dates/lib/css/_datepicker.css";
import 'react-dates/initialize';
import './firebase/firebase';

const store = configureStore();

const jsx = (
    <Provider store = {store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
