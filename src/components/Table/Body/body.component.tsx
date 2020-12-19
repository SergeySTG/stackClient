import { ITableBody, Item } from 'components/Table/Body/body.types';
import React, { ReactElement } from 'react';
import { Row } from 'components/Table/Body/Row/row.component';

export const Body = <T extends Item>(
  props: ITableBody<T>
): ReactElement<ITableBody<T>> => {
  const { items, columns } = props;

  return (
    <tbody>
      {items &&
        items.map(
          (item: T, index: number): ReactElement => (
            <Row<T>
              key={`row_${index.toString()}`}
              item={item}
              columns={columns}
            />
          )
        )}
    </tbody>
  );
};
