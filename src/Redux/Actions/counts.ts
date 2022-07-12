// import {Dispatch, AnyAction} from 'redux';
import {COUNTER_CHANGE} from '../Constants/constant';

export const changeCount = (count: number) => {
  return {
    type: COUNTER_CHANGE,
    payload: count,
  };
};
