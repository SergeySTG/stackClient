import { Question } from 'models/Question';
import { IStateResponse } from 'interfaces/common';
import { Response } from 'models/Response';

export type SearchState = IStateResponse<Response<Question>> & {
  title: string;
};

export const initialState: SearchState = {
  title: '',
  result: null,
  isLoading: false,
  isError: false,
};
