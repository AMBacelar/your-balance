import axios from 'axios';
import { SET_BALANCE, EXECUTE_TRANSACTION } from '../actionTypes';

function setBalance(balance){
  return{
    type: SET_BALANCE,
    balance
  }
}

function sendTransaction(transactionValue){
  return{
    type: EXECUTE_TRANSACTION,
    transactionValue
  }
}

export function fetchBalance(){
  return dispatch => {
    axios.get(`https://codepen.io/andismith/pen/oqzxyP.js`)
    .then(res => {
      dispatch(setBalance(res.data.balance));
    })    
  }
}

export function processTransaction( valueChange ) {
  return dispatch => {
    dispatch(sendTransaction(valueChange));
  }
}