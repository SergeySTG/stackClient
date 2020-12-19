import { ITableColumn } from 'components/Table/table.types';
import React, { ReactElement } from 'react';
import { ITableRow, Item } from 'components/Table/Body/body.types';
import { Cell } from 'components/Table/Body/Cell/cell.component';
import { useDispatch } from 'react-redux';

export const Row = <T extends Item>(props: ITableRow<T>): ReactElement => {
  const dispatch = useDispatch();
  const { item, columns } = props;

  return (
    <tr>
      {columns.map(
        (column: ITableColumn<T>, columnIndex: number): ReactElement => (
          <td key={`${column.header}_${columnIndex.toString()}`}>
            <Cell<T> column={column} item={item} dispatch={dispatch} />
          </td>
        )
      )}
    </tr>
  );
};
