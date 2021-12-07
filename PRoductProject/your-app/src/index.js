import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { connect,Provider } from 'react-redux';
import { createStore } from 'redux';

const intialState ={
  name:'fv',
  url:'',
  description:'',
  price:'',
}

const CHANGE_NAME = "CHANGE_NAME"
const actionChangeName ={
  type:CHANGE_NAME,
  payload:null
}
const CHANGE_URL = "CHANGE_URL"
const actionChangeUrl ={
  type:CHANGE_URL,
  payload:null
}
const CHANGE_DESCR = "CHANGE_DESCR"
const actionChangeDescr ={
  type:CHANGE_DESCR,
  payload:null
}
const CHANGE_PRICE = "CHANGE_PRICE"
const actionChangePrice ={
  type:CHANGE_PRICE,
  payload:null
}


const rootReducer = (state = intialState, action) =>{
  return state;
}



const store = createStore(rootReducer);

const mapStateToProps = (state) =>{
  return({
    name: state.name,
    url:state.url,
    description:state.description,
    price:state.price,
  })
}

const WrapedApp = connect(mapStateToProps)(App);

console.log(store.getState())
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <WrapedApp/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
