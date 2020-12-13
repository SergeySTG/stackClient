import { IChildrenComponent, IClassNameComponent } from 'interfaces/common';

export interface IButtonProps extends IClassNameComponent, IChildrenComponent {
  disabled?: boolean;
  onClick?: () => void;
}
