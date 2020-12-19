import { IStateResponse } from 'interfaces/common';
import { Response } from 'models/Response';
import { Question } from 'models/Question';

export enum QuestionModalTypes {
  byAuthor = 'byAuthor',
  byTag = 'byTag',
}

export type QuestionModalState = {
  searchType: QuestionModalTypes | null;
  search: string | number;
  isOpen: boolean;
  data: IStateResponse<Response<Question>>;
};

export const initialState: QuestionModalState = {
  searchType: null,
  isOpen: false,
  search: '',
  data: {
    result: null,
    isError: false,
    isLoading: false,
  },
};
