import { UnixDate } from 'interfaces/common';
import { IUser } from 'interfaces/api/user';

// API doc for Answer https://api.stackexchange.com/docs/types/answer
export interface IAnswer {
  answer_id: number;
  community_owned_date?: UnixDate;
  content_license: string;
  creation_date: UnixDate;
  is_accepted: false;
  last_activity_date: UnixDate;
  last_edit_date?: UnixDate;
  locked_date?: UnixDate;
  owner: IUser;
  question_id: number;
  score: number;
}
