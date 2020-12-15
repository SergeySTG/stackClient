import { Question } from 'models/Question';
import { IStateResponse } from 'interfaces/common';
import { Response } from 'models/Response';

export type SearchState = IStateResponse<Response<Question>>;

export const initialState: SearchState = {
  result: null,
  isLoading: false,
  isError: false,
};
