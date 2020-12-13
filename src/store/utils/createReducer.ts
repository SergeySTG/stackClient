import { Reducer, AnyAction } from 'redux';

export interface Handlers<S> {
  [actionType: string]: Reducer<S, AnyAction>;
}

export const createReducer = <S>(
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
