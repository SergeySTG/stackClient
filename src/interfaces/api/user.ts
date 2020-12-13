import { Link } from 'interfaces/common';

export enum UserTypes {
  unregistered = 'unregistered',
  registered = 'registered',
  moderator = 'moderator',
  team_admin = 'team_admin',
  does_not_exist = 'does_not_exist',
}

export interface IUser {
  accept_rate?: number;
  display_name?: string;
  link?: Link;
  profile_image?: string;
  reputation?: number;
  user_id?: number;
  user_type?: UserTypes;
}
