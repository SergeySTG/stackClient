import { IClassNameComponent } from 'interfaces/common';

export interface IInputProps extends IClassNameComponent {
  value: string;
  onChange: (val: string) => void;
  error?: string;
}
