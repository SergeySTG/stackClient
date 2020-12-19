import React, { ReactElement } from 'react';
import { IHeadersProps } from 'components/Table/Headers/headers.types';
import { ITableColumn } from 'components/Table/table.types';

export const Headers = <T,>(props: IHeadersProps<T>): ReactElement<T> => {
  const { columns, showShadow } = props;

  return (
    <thead>
      <tr>
        {columns.map(
          (column: ITableColumn<T>, index: number): ReactElement => (
            <th
              key={`${column.header}_${index.toString()}`}
              style={{
                width: column.width,
              }}
            >
              {column.header}
            </th>
          )
        )}
      </tr>
      {showShadow && (
        <tr>
          <th className="shadow" colSpan={columns.length}>
            {' '}
          </th>
        </tr>
      )}
    </thead>
  );
};
