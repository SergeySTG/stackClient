import { ITableProps } from 'components/Table/table.types';
import React, { ReactElement } from 'react';
import { Table } from 'components/Table/table.component';
import { Columns } from 'containers/AnswerTable/answer-table.columns';
import { Answer } from 'models/Answer';

import './answer-table.styles.scss';

export const AnswerTable = (
  props: Omit<ITableProps<Answer>, 'columns'>
): ReactElement => {
  const { items, ...rest } = props;

  return (
    <Table<Answer>
      className="answer-table"
      columns={Columns}
      items={items}
      {...rest}
    />
  );
};
