// call api method as is
import { IFilterAPI, IResponseAPI } from 'interfaces/api';
import { fetchData } from 'api/utils';
import { EndPoints } from 'constants/endpoints';
import { FiltersAPI } from 'constants/filters';
import { Response } from 'models/Response';
import { Question } from 'models/Question';
import { IQuestionAPI } from 'interfaces/api/question';

const fetchQuestions = (
  userId: string,
  filter?: Partial<IFilterAPI>
): Promise<IResponseAPI<IQuestionAPI> | null> => {
  return fetchData<IResponseAPI<IQuestionAPI>>(
    EndPoints.users.questions(userId),
    {
      ...filter,
      filter: FiltersAPI.answers,
    }
  );
};

// returns result from api as list of answers
export const getQuestionByUser = async (
  userId: string,
  filter?: Partial<IFilterAPI>
): Promise<Response<Question> | null> => {
  return Response.createInstancePagination<Question, IQuestionAPI>(
    (page: number) =>
      fetchQuestions(userId, {
        ...filter,
        page,
      }),
    Question.createArrayOfInstance
  );
};
