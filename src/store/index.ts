import {createStore} from "redux";

const counterReducer = (state = {counter: 0}, action: any) => {
  if (action.type === "INCREMENT") {
    return {counter: state.counter + 1};
  }
  if (action.type === "DECREMENT") {
    return {counter: state.counter - 1};
  }
  if (action.type === "INCREASE") {
    return {counter: state.counter + action.amount};
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
