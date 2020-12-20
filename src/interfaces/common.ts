import { ReactNode } from 'react';
import { OrderAPI, SortAPI } from 'interfaces/api';

export interface IClassNameComponent {
  className?: string;
}

export interface IChildrenComponent {
  children?: ReactNode;
}

export type Link = string;

export type UnixDate = number;

export interface IStateResponse<T> {
  result: T | null;
  sort?: SortAPI;
  order?: OrderAPI;
  isLoading: boolean;
  isError: boolean;
}
