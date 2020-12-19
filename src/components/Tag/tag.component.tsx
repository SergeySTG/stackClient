import { ITagProps } from 'components/Tag/tag.types';
import React, { FC, ReactElement } from 'react';

import './tag.styles.scss';

export const Tag: FC<ITagProps> = (
  props: ITagProps
): ReactElement<ITagProps> => {
  const { title, onClick } = props;
  const onClickHandler =
    onClick &&
    ((): void => {
      onClick(title);
    });

  return (
    <button className="tag-container" onClick={onClickHandler} type="button">
      {title}
    </button>
  );
};
