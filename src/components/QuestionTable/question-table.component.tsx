import { ITableProps } from 'components/Table/table.types';
import { Question } from 'models/Question';
import React, { ReactElement } from 'react';
import { Table } from 'components/Table/table.component';
import { Columns } from 'components/QuestionTable/question-table.columns';
import './question-table.styles.scss';

export const QuestionTable = (
  props: Omit<ITableProps<Question>, 'columns'>
): ReactElement => {
  const { items } = props;

  return (
    <Table<Question>
      className="question-table"
      columns={Columns}
      items={items}
    />
  );
};
