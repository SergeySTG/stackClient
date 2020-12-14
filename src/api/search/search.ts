import { ISearchFilter } from 'api/search/search.types';
import { fetchData } from 'api/utils';
import { EndPoints } from 'constants/endpoints';
import { Question } from 'models/Question';
import { Response } from 'models/Response';
import { IQuestionAPI } from 'interfaces/api/question';
import { IResponseAPI } from 'interfaces/api';

// returns result from api as is
export const search = (
  filter: ISearchFilter
): Promise<IResponseAPI<IQuestionAPI> | null> => {
  return fetchData<IResponseAPI<IQuestionAPI>>(EndPoints.search, filter);
};

// returns result from api as list of questions
export const searchQuestions = async (
  filter: ISearchFilter
): Promise<Response<Question> | null> => {
  return Response.createInstancePagination<Question, IQuestionAPI>(
    (page: number) =>
      search({
        ...filter,
        page,
      }),
    Question.createArrayOfInstance
  );
};
