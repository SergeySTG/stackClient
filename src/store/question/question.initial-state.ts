import { IStateResponse } from 'interfaces/common';
import { Response } from 'models/Response';
import { Answer } from 'models/Answer';

export type QuestionState = IStateResponse<Response<Answer>> & {
  id: string;
};

export const initialState: QuestionState = {
  id: '',
  result: null,
  isLoading: false,
  isError: false,
};
