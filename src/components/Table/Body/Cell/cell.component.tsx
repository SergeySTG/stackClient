import { ICellProps } from 'components/Table/Body/Cell/cell.types';
import React, { ReactElement } from 'react';

export const Cell = <T,>(props: ICellProps<T>): ReactElement<ICellProps<T>> => {
  const {
    column: { render, accessor },
    item,
  } = props;

  if (render) {
    const Render = render;

    return <Render item={item} />;
  }
  if (!accessor) {
    throw new Error('You must set render or accessor props in columns');
  }

  return <span>{item[accessor]}</span>;
};
