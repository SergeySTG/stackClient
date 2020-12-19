import { ITableCell } from 'components/Table/Body/body.types';
import { ITableColumn } from 'components/Table/table.types';
import { Dispatch } from 'redux';

export interface ICellProps<T> extends ITableCell<T> {
  column: ITableColumn<T>;
  dispatch: Dispatch;
}
