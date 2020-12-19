import { ITableColumn } from 'components/Table/table.types';
import { Question } from 'models/Question';
import { ITableCell } from 'components/Table/Body/body.types';
import React from 'react';
import { Tag } from 'components/Tag/tag.component';
import { generatePath, Link } from 'react-router-dom';
import { Routes } from 'constants/routes';

export const Columns: ITableColumn<Question>[] = [
  {
    header: 'Author',
    render: (props: ITableCell<Question>): JSX.Element => {
      const { item } = props;

      return <div>{item.owner.name}</div>;
    },
  },
  {
    header: 'Score',
    accessor: 'score',
  },
  {
    header: 'Question',
    render: (props: ITableCell<Question>): JSX.Element => {
      const { item } = props;
      const question = item as Question;

      return (
        <Link
          to={generatePath(Routes.question, {
            id: question.id,
          })}
        >
          {question.title}
        </Link>
      );
    },
  },
  {
    header: 'Answer count',
    render: (props: ITableCell<Question>): JSX.Element => {
      const { item } = props;
      const question = item as Question;

      return (
        <Link
          to={generatePath(Routes.question, {
            id: question.id,
          })}
        >
          {question.answerCount}
        </Link>
      );
    },
  },
  {
    header: 'Tags',
    render: (props: ITableCell<Question>): JSX.Element => {
      const { item } = props;
      const tags = item.tags.map((tag: string, index: number) => (
        <Tag title={tag} key={`${tag}_${index.toString()}`} />
      ));

      return <>{tags}</>;
    },
  },
];
