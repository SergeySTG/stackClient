import { Handlers, createReducer } from 'store/utils/createReducer';
import { ActionTypes } from 'store/action/action.types';
import { AnyAction } from 'redux';

interface IAction {
  payload: string;
}
const reducers: Handlers<IAction> = {};

reducers[ActionTypes.ACTION] = (
  state: IAction | undefined,
  action: AnyAction
): IAction => {
  return {
    ...state,
    ...action.payload,
  };
};

export default createReducer(
  {
    payload: '',
  },
  reducers
);
