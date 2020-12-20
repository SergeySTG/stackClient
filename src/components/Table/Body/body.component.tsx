import { ITableBody, Item } from 'components/Table/Body/body.types';
import React, { ReactElement } from 'react';
import { Row } from 'components/Table/Body/Row/row.component';
import { Preloader } from 'components/Preloader/preloader.component';

export const Body = <T extends Item>(
  props: ITableBody<T>
): ReactElement<ITableBody<T>> => {
  const { items, columns, isItemLoading, errorMessage } = props;

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
      {isItemLoading && (
        <tr>
          <td colSpan={columns.length}>
            <div className="loader">
              <Preloader />
            </div>
          </td>
        </tr>
      )}
      {errorMessage ? (
        <tr>
          <td className="error" colSpan={columns.length}>
            {errorMessage}
          </td>
        </tr>
      ) : null}
    </tbody>
  );
};
