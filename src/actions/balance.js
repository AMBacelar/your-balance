import { SET_BALANCE, EXECUTE_TRANSACTION } from '../actionTypes';

// set balance
export function setBalance(balance){
  return{
    type: SET_BALANCE,
    balance
  }
}

export function fetchBalance(){
  return dispatch => {
    dispatch(setBalance(12))
    return Promise.resolve()
  }
}

// transaction