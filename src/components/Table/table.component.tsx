import { ITableProps } from 'components/Table/table.types';
import React, { ReactElement } from 'react';

import './table.styles.scss';
import { Headers } from 'components/Table/Headers/headers.component';
import { Body } from 'components/Table/Body/body.component';
import { Item } from 'components/Table/Body/body.types';
import { useScrollHandler } from 'hooks/scroll';

export const Table = <T extends Item>(
  props: ITableProps<T>
): ReactElement<ITableProps<T>> => {
  const {
    columns,
    items,
    className = '',
    maxHeight,
    isLoading,
    errorMessage,
    onLoadMore,
  } = props;
  const tableClass = `table-custom ${className} ${
    maxHeight ? 'fixed-size' : ''
  } ${errorMessage ? 'error' : ''}`;
  const { ref, isStart, onScroll } = useScrollHandler(maxHeight, onLoadMore);

  return (
    <div
      className={tableClass}
      ref={ref}
      style={{
        maxHeight,
      }}
      onScroll={onScroll}
    >
      <table cellSpacing={0}>
        <Headers<T> columns={columns} showShadow={!isStart} />
        <Body<T>
          items={items}
          columns={columns}
          isItemLoading={isLoading}
          errorMessage={errorMessage}
        />
      </table>
    </div>
  );
};
