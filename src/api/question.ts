import { IFilterAPI, IResponseAPI } from 'interfaces/api';
import { fetchData } from 'api/utils';
import { EndPoints } from 'constants/endpoints';
import { Response } from 'models/Response';
import { IAnswerAPI } from 'interfaces/api/answer';
import { FiltersAPI } from 'constants/filters';
import { Answer } from 'models/Answer';

// call api method as is
const fetchAnswers = (
  questionId: string,
  filter?: Partial<IFilterAPI>
): Promise<IResponseAPI<IAnswerAPI> | null> => {
  return fetchData<IResponseAPI<IAnswerAPI>>(
    EndPoints.questions.answers(questionId),
    {
      ...filter,
      filter: FiltersAPI.answers,
    }
  );
};

// returns result from api as list of answers
export const getAnswersByQuestion = async (
  questionId: string,
  filter?: Partial<IFilterAPI>
): Promise<Response<Answer> | null> => {
  return Response.createInstancePagination<Answer, IAnswerAPI>(
    (page: number) =>
      fetchAnswers(questionId, {
        ...filter,
        page,
      }),
    Answer.createArrayOfInstance
  );
};
