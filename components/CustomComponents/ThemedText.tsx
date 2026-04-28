import {styleMerge} from '@/utilities/Styling';
import {Text, TextProps} from 'react-native';

//Good example of Props passing to child. TextProps type gives all the props of 'View' to 'ThemedView'
type ThemedTextProps = TextProps & {
  className?: string
};

const ThemedText = ({className='', ...rest}: ThemedTextProps) => {
  return (
    <Text className={styleMerge('dark:text-white text-center text-black ', className)} {...rest} />
  );
};

export default ThemedText;
