import { ICellProps } from 'components/Table/Body/Cell/cell.types';
import React, { ReactElement } from 'react';

export const Cell = <T,>(props: ICellProps<T>): ReactElement<ICellProps<T>> => {
  const {
    column: { render, accessor },
    item,
    dispatch,
  } = props;

  if (render) {
    return render(item, dispatch);
  }
  if (!accessor) {
    throw new Error('You must set render or accessor props in columns');
  }

  return <span>{item[accessor]}</span>;
};
