import React from 'react';

export interface IRoute {
  path: string;
  page: React.FC;
  layout?: React.FC;
}
