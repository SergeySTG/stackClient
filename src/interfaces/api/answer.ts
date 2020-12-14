import { UnixDate } from 'interfaces/common';
import { IUserAPI } from 'interfaces/api/user';

// API doc for Answer https://api.stackexchange.com/docs/types/answer
export interface IAnswerAPI {
  answer_id: number;
  community_owned_date?: UnixDate;
  content_license: string;
  creation_date: UnixDate;
  is_accepted: false;
  last_activity_date: UnixDate;
  last_edit_date?: UnixDate;
  locked_date?: UnixDate;
  owner: IUserAPI;
  body: string; // only with unsafe filter
  body_markdown: string; // only with unsafe filter
  question_id: number;
  score: number;
}
