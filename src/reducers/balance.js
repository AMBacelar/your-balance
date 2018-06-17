import { SET_BALANCE, EXECUTE_TRANSACTION } from '../actionTypes';

const initialState = 0;

export default (state = initialState, action = {}) => {
	switch(action.type){
		case SET_BALANCE:
			return action.balance;
		case EXECUTE_TRANSACTION:
			return state + action.transactionValue
		default: return state;
	}
}