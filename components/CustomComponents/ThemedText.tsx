import {cn} from '@/utilities/nativewindMerge';
import {Text, TextProps} from 'react-native';

type ThemedTextProps = TextProps & {
  className? : string
}

const ThemedText = ({className='', ...rest}: ThemedTextProps) => {
  return (
    <Text className={cn('dark:text-white text-black ', className) }{...rest}  />
  );
};

export default ThemedText;
