import React from 'react';
import { ITableColumn } from 'components/Table/table.types';
import { Answer } from 'models/Answer';

export const Columns: ITableColumn<Answer>[] = [
  {
    header: 'Score',
    accessor: 'score',
    width: 100,
  },
  {
    header: 'Answer',
    render: (answer: Answer): JSX.Element => (
      <div
        // I could use react-render html library instead of dangerouslySetInnerHTML
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: answer.body,
        }}
      />
    ),
  },
];
