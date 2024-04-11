import type { DetailedHTMLProps, SelectHTMLAttributes } from 'react';
import { forwardRef } from 'react';

import SelectNormal from './SelectNormal';

export interface SelectProps
  extends DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  options: { label: number | string; value: number | string }[];
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (props: SelectProps, ref) => {
    return <SelectNormal {...props} ref={ref} />;
  },
);
export default Select;
