import { IUser } from 'interfaces/api/user';
import { Link, UnixDate } from 'interfaces/common';

// API from https://api.stackexchange.com/docs/types/question;
export interface IQuestion {
  answer_count: number;
  content_license: string;
  creation_date: UnixDate;
  is_answered: boolean;
  last_activity_date: UnixDate;
  link: Link;
  owner: IUser;
  question_id: number;
  score: number;
  tags: string[];
  title: string;
  view_count: number;
}
