import React, { ReactElement } from 'react';
import { IHeadersProps } from 'components/Table/Headers/headers.types';
import { ITableColumn } from 'components/Table/table.types';
import { SortSelect } from 'components/SortSelect/sort-select.component';

export const Headers = <T,>(props: IHeadersProps<T>): ReactElement<T> => {
  const { columns, showShadow, sort } = props;

  return (
    <thead className={sort ? 'with-sorting' : ''}>
      {sort && (
        <tr>
          <th className="sort-group" colSpan={columns.length}>
            <SortSelect {...sort} />
          </th>
        </tr>
      )}
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
