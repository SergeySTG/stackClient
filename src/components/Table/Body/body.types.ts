import { ITableColumn } from 'components/Table/table.types';

class ItemClass {}

export type Item = ItemClass | Record<string, unknown>;

export interface ITableCell<T> {
  item: T;
}

export interface ITableRow<T> {
  item: T;
  columns: ITableColumn<T>[];
}

export interface ITableBody<T> {
  items?: T[];
  columns: ITableColumn<T>[];
  isItemLoading?: boolean;
  errorMessage?: string;
}
