import {clsx} from 'clsx';
import {twMerge} from 'tailwind-merge';

export const cn = (...styles)=> {
  return twMerge(clsx(styles));
};
