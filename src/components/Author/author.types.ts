import { Author } from 'models/Author';

export interface IAuthorProps {
  item: Author;
  onClick?: (id: number) => void;
}
