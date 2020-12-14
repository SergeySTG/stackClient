import { IUserAPI } from 'interfaces/api/user';
import { Link, UnixDate } from 'interfaces/common';

// API from https://api.stackexchange.com/docs/types/question;
export interface IQuestionAPI {
  accepted_answer_id?: number;
  answer_count: number;
  bounty_amount?: number;
  bounty_closes_date?: number;
  closed_date?: UnixDate;
  closed_reason?: string;
  community_owned_date?: UnixDate;
  content_license: string;
  creation_date: UnixDate;
  is_answered: boolean;
  last_activity_date: UnixDate;
  last_edit_date?: UnixDate;
  link: Link;
  locked_date?: UnixDate;
  owner: IUserAPI;
  protected_date?: UnixDate;
  question_id: number;
  score: number;
  tags: string[];
  title: string;
  view_count: number;
}
