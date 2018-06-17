import reducer from './balance';
import { SET_BALANCE, EXECUTE_TRANSACTION } from '../actionTypes';

describe('balance reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(0)
  });
  it('should handle SET_BALANCE', () => {
    expect(reducer(undefined, {
      type: SET_BALANCE,
      balance: 24
    })).toEqual(24);
  });
  it('should handle EXECUTE_TRANSACTION', () => {
    expect(reducer(undefined, {
      type: EXECUTE_TRANSACTION,
      transactionValue: 3
    })).toEqual(3);
  });
  it('should handle EXECUTE_TRANSACTION [negative value]', () => {
    expect(reducer(undefined, {
      type: EXECUTE_TRANSACTION,
      transactionValue: -3
    })).toEqual(-3);
  });
  it('should handle EXECUTE_TRANSACTION with a previous value', () => {
    expect(reducer(10, {
      type: EXECUTE_TRANSACTION,
      transactionValue: 3
    })).toEqual(13);
  });
  it('should handle EXECUTE_TRANSACTION with a previous value negative', () => {
    expect(reducer(10, {
      type: EXECUTE_TRANSACTION,
      transactionValue: -3
    })).toEqual(7);
  });
})