import { Reducer, AnyAction } from 'redux';

export interface Handlers<S> {
  [actionType: string]: (state: S, action: AnyAction) => S;
}

export const createReducer = <S = unknown>(
  initialState: S,
  handlers: Handlers<S>
): Reducer<S, AnyAction> => {
  return (state: S | undefined, action: AnyAction): S => {
    const localState = state === undefined ? initialState : state;

    if (handlers[action.type]) {
      return handlers[action.type](localState, action);
    }
    return localState;
  };
};
