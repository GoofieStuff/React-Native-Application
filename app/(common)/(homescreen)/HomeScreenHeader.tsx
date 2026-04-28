
import {Image, View} from 'react-native';
import React from 'react';

import Animated  from 'react-native-reanimated';
import {web} from '@/utilities/CommonFunctions';
import {applyShadow, cn} from '@/utilities/Styling';
import {Box} from '@/components/ui/box';
import ThemedView from '@/components/CustomComponents/ThemedView';
import ThemedText from '@/components/CustomComponents/ThemedText';
import {useCopyToClipboard} from '@/hooks/copyToClipboard';
import {Icon} from '@/components/ui/icon';
import {MailCheck} from 'lucide-react-native';
import {useSlideAndOscillate} from '@/hooks/Animations/useSlideAndOscillate';

const HomeScreenHeader = () => {
 
  const {isCopied, copyToClipboard} = useCopyToClipboard();
  const imageFloatingAnimation  = useSlideAndOscillate();
  
  return (
    <ThemedView className={styleMerge('w-full h-[500px] android:h-[400px] flex items-center justify-center rounded-md dark:bg-gray-700 bg-tertiary-200 ', applyShadow('xl') )}>
      <Box className={'w-full flex flex-row items-center justify-center android:flex-col gap-20 android:gap-5 '}>
        
        <Animated.View className={styleMerge('rounded-full  w-[400px] h-[400px] android:h-[280px] android:w-[280px] ')}
          style = {imageFloatingAnimation}
        >
          <Image
            className={styleMerge('rounded-full ', applyShadow('xl'))}
            source={require('@/assets/images/SelfImage.png')}
            alt={'My Image'}
            style={{
              height:(web ? 400:  280),
              width:(web ? 400:  280),
            }}
          />
        </Animated.View>
       
        <View className={styleMerge('  items-center justify-center', (web ? 'h-full w-1/3': 'w-full'))}> 
          <ThemedText className={styleMerge('font-bitcount-medium ', (web ? 'text-white text-[60px]': 'text-primary-500 text-[40px] w-full'))}>Sanket Kokate</ThemedText>

          <View className={' flex flex-row w-full justify-center   items-center gap-4'}>
            <Icon as={MailCheck} size={'lg'} className={'mt-1'} />
            <ThemedText className={styleMerge('text-green-800  text-xl font-semibold', (web ? '': ''))} onPress={()=>{
              copyToClipboard('sanketkokate1084@gmail.com');
            }}>sanketkokate1084@gmail.com</ThemedText>
          </View>
        </View>
          
      </Box>
    </ThemedView>
  );
};

export default HomeScreenHeader;
