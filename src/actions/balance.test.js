import { SET_BALANCE, EXECUTE_TRANSACTION } from '../actionTypes';
import { setBalance, sendTransaction } from './balance';

describe('balance actions', () => {
  it('should create an action to set balance', () => {
    const balance = 12;
    const expectedAction = {
      type: SET_BALANCE,
      balance
    }
    expect(setBalance(balance)).toEqual(expectedAction)
  })
  it('should create an action to send transactions positive', () => {
    const transactionValue = 12;
    const expectedAction = {
      type: EXECUTE_TRANSACTION,
      transactionValue
    }
    expect(sendTransaction(transactionValue)).toEqual(expectedAction)
  })
  it('should create an action to send transactions negative', () => {
    const transactionValue = -2;
    const expectedAction = {
      type: EXECUTE_TRANSACTION,
      transactionValue
    }
    expect(sendTransaction(transactionValue)).toEqual(expectedAction)
  })
})