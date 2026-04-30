import {web} from '@/utilities/CommonFunctions';
import {styleMerge} from '@/utilities/Styling';
import {Text, TextProps, useWindowDimensions} from 'react-native';

//Good example of Props passing to child. TextProps type gives all the props of 'View' to 'ThemedView'
type ThemedTextProps = TextProps & {
  className?: string
};

const ThemedText = ({className='', ...rest}: ThemedTextProps) => {
  const {width} = useWindowDimensions();
  let textSize = '' ;
  switch(true){
    case width <600 : 
      textSize = 'text-sm';
      break;
    case width < 800:
      textSize = 'text-lg';
      break;
    
    default:
      textSize = 'text-xl';
      break;
  }
  
  return (
    <Text className={styleMerge('dark:text-white text-center text-black ', ( web ? textSize: ''), className )} {...rest} />
  );
};

export default ThemedText;
