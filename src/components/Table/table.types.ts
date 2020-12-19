import { IClassNameComponent } from 'interfaces/common';
import { ITableCell, Item } from 'components/Table/Body/body.types';

export interface ITableColumn<T> {
  header: string;
  accessor?: keyof T;
  width?: number;
  render?: (props: ITableCell<T>) => JSX.Element;
}

export interface ITableProps<T extends Item> extends IClassNameComponent {
  items?: T[];
  columns: ITableColumn<T>[];
  onLoadMore?: () => void;
}
