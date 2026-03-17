import {clsx} from 'clsx';
import {Platform} from 'react-native';
import {twMerge} from 'tailwind-merge';

export const cn = (...styles)=> {
  return twMerge(clsx(styles));
};

type ShadowIntensity = 'sm'|'md'|'lg'|'xl'|'2xl';
export const applyShadow =  (intensity:ShadowIntensity = 'sm') =>{
  if(Platform.OS === 'web'){
    return (`shadow-${intensity}`);
  }
  else{
    return (`elevation-${intensity}`);
  }
};
