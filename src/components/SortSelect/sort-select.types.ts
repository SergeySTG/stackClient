import { IClassNameComponent } from 'interfaces/common';
import { OrderAPI, SortAPI } from 'interfaces/api';

export interface ISortSelectProps extends IClassNameComponent {
  sort?: SortAPI;
  order?: OrderAPI;
  onChange: (sort: SortAPI, order: OrderAPI) => void;
}
