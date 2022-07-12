import {COUNTER_CHANGE} from './../Constants/constant';

export interface ActionInterface {
  type: string;
  payload: number;
}
const initialState = {
  count: 0,
};

export const countReducer = (state = initialState, action: ActionInterface) => {
  switch (action.type) {
    case COUNTER_CHANGE: {
      return {...state, count: state.count + action.payload};
    }
    default: {
      return state;
    }
  }
};
