import { ITableProps } from 'components/Table/table.types';
import React, { ReactElement } from 'react';

import './table.styles.scss';
import { Headers } from 'components/Table/Headers/headers.component';
import { Body } from 'components/Table/Body/body.component';
import { Item } from 'components/Table/Body/body.types';

export const Table = <T extends Item>(
  props: ITableProps<T>
): ReactElement<ITableProps<T>> => {
  const { columns, items, className = '' } = props;

  return (
    <div className={`table-custom ${className}`}>
      <table cellSpacing={0}>
        <Headers<T> columns={columns} showShadow />
        <Body<T> items={items} columns={columns} />
      </table>
    </div>
  );
};
