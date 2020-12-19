import { ITableColumn } from 'components/Table/table.types';

export interface IHeadersProps<T> {
  columns: ITableColumn<T>[];
  showShadow?: boolean;
}
