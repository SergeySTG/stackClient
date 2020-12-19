import React, { FC, ReactElement, useCallback } from 'react';
import { IAuthorProps } from 'components/Author/author.types';
import './author.styles.scss';

export const Author: FC<IAuthorProps> = (
  props: IAuthorProps
): ReactElement<IAuthorProps> => {
  const { item, onClick } = props;
  const { image, name, id } = item;
  const onClickHandler = useCallback(() => {
    if (id && onClick) {
      onClick(id);
    }
  }, [id, onClick]);

  return (
    <button className="author" onClick={onClickHandler} type="button">
      <img src={image} alt="user profile" />
      <div>{name}</div>
    </button>
  );
};
