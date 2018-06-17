import { SET_BALANCE } from '../actionTypes';

const initialState = 0;

export default (state = initialState, action = {}) => {
	switch(action.type){
		case SET_BALANCE:
			return action.balance;
		default: return state;
	}
}