import "normalize.css/normalize.css";
import "./styles/styles.scss";
import ReactDOM from "react-dom";
import React from 'react';
import { Provider } from 'react-redux'; 
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import getVisableExpences from './selectors/expences';
import "react-dates/lib/css/_datepicker.css";



const store = configureStore();
store.dispatch(addExpense({description: 'water bill', amount: 4000}));
store.dispatch(addExpense({description: 'gas bill', createdAt: 1000}));
store.dispatch(addExpense({description: 'rent', amount: 109500}));
const state = store.getState();
const visibleElements = getVisableExpences(state.expenses, state.filters);

const jsx = (
    <Provider store = {store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
