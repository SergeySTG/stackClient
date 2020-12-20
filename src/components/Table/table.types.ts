import { IClassNameComponent } from 'interfaces/common';
import { Item } from 'components/Table/Body/body.types';
import { Dispatch } from 'redux';
import { ISortSelectProps } from 'components/SortSelect/sort-select.types';

export type ISortTable = Omit<ISortSelectProps, 'className'>;

export interface ITableColumn<T> {
  header: string;
  accessor?: keyof T;
  width?: number;
  render?: (item: T, dispatch: Dispatch) => JSX.Element;
}

export interface ITableProps<T extends Item> extends IClassNameComponent {
  items?: T[];
  columns: ITableColumn<T>[];
  maxHeight?: number;
  onLoadMore?: () => void;
  sort?: ISortTable;
  isLoading?: boolean;
  errorMessage?: string;
}
