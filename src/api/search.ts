import { IQuestion } from 'interfaces/question';

export const search = (): Promise<IQuestion[]> =>
  Promise.resolve({} as IQuestion[]);
