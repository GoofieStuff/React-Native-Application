import {cn} from '@/utilities/Styling';
import {View, ViewProps} from 'react-native';

type ThemedViewProps = ViewProps & {
  className? : string
}

const ThemedView = ({className='', ...rest}: ThemedViewProps) => {
  return (
    <View className={cn('dark:bg-gray-800 bg-tertiary-100 ', className)} {...rest} />
  );
};

export default ThemedView;
