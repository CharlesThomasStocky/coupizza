import ReactDOM from 'react-dom'; 
import { BrowserRouter } from 'react-router-dom';  
import FormComponent from './components/App'; 
import React from 'react'; 
import { createStore, combineReducers } from 'redux'; 
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <FormComponent />
  </Provider>
  ,document.getElementById('app')
) 
