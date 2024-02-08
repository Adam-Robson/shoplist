import { Action, State } from "../lib/types";

export const log = (reducer: React.Reducer<State, Action>) => {
  return (state: State, action: Action) => {
    console.info('Before', state);
    console.info('After', action);
    const newState = reducer(state, action);
    console.info('After', newState);
    return newState;
  };
};
