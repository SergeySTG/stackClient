import { UnixDate } from 'interfaces/common';
import { IUser } from 'interfaces/api/user';

export interface IAnswer {
  answer_id: 65261238;
  content_license: string;
  creation_date: UnixDate;
  is_accepted: false;
  last_activity_date: UnixDate;
  owner: IUser;
  question_id: number;
  score: number;
}
