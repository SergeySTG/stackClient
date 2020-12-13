import { IUser } from 'interfaces/user';
import { Link } from './common';

// API from https://api.stackexchange.com/docs/types/question;
export interface IQuestion {
  answer_count: number;
  content_license: string;
  creation_date: Date;
  is_answered: boolean;
  last_activity_date: Date;
  link: Link;
  owner: IUser;
  question_id: number;
  score: number;
  tags: string[];
  title: string;
  view_count: number;
}
