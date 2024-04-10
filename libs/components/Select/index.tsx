import type { DetailedHTMLProps, SelectHTMLAttributes } from 'react';

import SelectNormal from './SelectNormal';

export interface SelectProps
  extends DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  options: { label: number | string; value: number | string }[];
}

const Select = (props: SelectProps) => {
  return <SelectNormal {...props} />;
};
export default Select;
