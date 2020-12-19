import { ITableColumn } from 'components/Table/table.types';
import { Question } from 'models/Question';
import React from 'react';
import { Tag } from 'components/Tag/tag.component';
import { generatePath, Link } from 'react-router-dom';
import { Routes } from 'constants/routes';
import { Author } from 'components/Author/author.component';
import { Dispatch } from 'redux';
import { QuestionModalActions } from 'store/questions-modal/questions-modal.actions';
import { QuestionModalTypes } from 'store/questions-modal/questions-modal.initial-state';

export const Columns: ITableColumn<Question>[] = [
  {
    header: 'Author',
    render: (question: Question, dispatch: Dispatch): JSX.Element => {
      const onClickHandler = (): void => {
        dispatch(
          QuestionModalActions.open(
            QuestionModalTypes.byAuthor,
            question.owner?.id || 0
          )
        );
      };

      return <Author item={question.owner} onClick={onClickHandler} />;
    },
  },
  {
    header: 'Score',
    accessor: 'score',
  },
  {
    header: 'Question',
    render: (question: Question): JSX.Element => (
      <Link
        to={generatePath(Routes.question, {
          id: question.id,
        })}
      >
        {question.title}
      </Link>
    ),
  },
  {
    header: 'Answer count',
    render: (question: Question): JSX.Element => (
      <Link
        to={generatePath(Routes.question, {
          id: question.id,
        })}
      >
        {question.answerCount}
      </Link>
    ),
  },
  {
    header: 'Tags',
    render: (question: Question, dispatch: Dispatch): JSX.Element => {
      const onClickHandler = (tag: string): void => {
        dispatch(QuestionModalActions.open(QuestionModalTypes.byTag, tag));
      };
      const tags = question.tags.map((tag: string, index: number) => (
        <Tag
          title={tag}
          key={`${tag}_${index.toString()}`}
          onClick={onClickHandler}
        />
      ));

      return <>{tags}</>;
    },
  },
];
