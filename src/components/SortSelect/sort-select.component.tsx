import React, { FC, ReactElement } from 'react';
import { ISortSelectProps } from 'components/SortSelect/sort-select.types';
import { OrderAPI, SortAPI } from 'interfaces/api';
import { DefaultOrder, DefaultSort } from 'constants/filters';
import { useSelectHandler } from 'components/SortSelect/sort-select.hooks';

import './sort-select.styles.scss';

const SortOptions: { [key in SortAPI]: string } = {
  [SortAPI.activity]: 'Activity',
  [SortAPI.votes]: 'Votes',
  [SortAPI.creation]: 'Creation date',
  [SortAPI.relevance]: 'Relevance',
};

const OrderOptions: { [key in OrderAPI]: string } = {
  [OrderAPI.asc]: 'Asc',
  [OrderAPI.desc]: 'Desc',
};

const objectToOptions = (data: Record<string, string>): JSX.Element[] =>
  Object.entries(data).map(
    ([key, value]: [string, string]): JSX.Element => (
      <option key={key} value={key}>
        {value}
      </option>
    )
  );

export const SortSelect: FC<ISortSelectProps> = (
  props: ISortSelectProps
): ReactElement<ISortSelectProps> => {
  const {
    sort = DefaultSort,
    order = DefaultOrder,
    className,
    onChange,
  } = props;

  const onChangeSort = useSelectHandler<SortAPI>((newSort: SortAPI): void => {
    onChange(newSort, order);
  });
  const onChangeOrder = useSelectHandler<OrderAPI>(
    (newOrder: OrderAPI): void => {
      onChange(sort, newOrder);
    }
  );

  return (
    <div className={`sort-select ${className}`}>
      <span>Sort:</span>
      <select value={sort} onChange={onChangeSort}>
        {objectToOptions(SortOptions)}
      </select>
      <select value={order} onChange={onChangeOrder}>
        {objectToOptions(OrderOptions)}
      </select>
    </div>
  );
};
