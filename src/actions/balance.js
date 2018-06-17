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
    dispatch(setBalance(12));
  }
}

export function processTransaction( valueChange ) {
  return dispatch => {
    dispatch(sendTransaction(valueChange));
  }
}