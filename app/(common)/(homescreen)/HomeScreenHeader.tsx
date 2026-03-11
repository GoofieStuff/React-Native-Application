
import {Image,  Platform,   View,   useColorScheme} from 'react-native';
import React from 'react';

import {isPlatformWeb} from '@/utilities/CommonFunctions';
import {cn} from '@/utilities/nativewindMerge';
import {Box} from '@/components/ui/box';
import ThemedView from '@/components/CustomComponents/ThemedView';
import ThemedText from '@/components/CustomComponents/ThemedText';
import {ImageBackground} from '@/components/ui/image-background';

const HomeScreenHeader = () => {
  console.log(useColorScheme());
  return (
    <ThemedView className={cn('w-full h-[500px] android:h-[400px] flex items-center justify-center rounded-md dark:bg-gray-700 bg-tertiary-300 ', (Platform.OS === 'web' ? 'shadow-xl' : 'elevation-xl') )}>
      <Box className={'w-full flex flex-row items-center justify-center android:flex-col   gap-5 '}>
        <Image
          className={cn('rounded-full w-1/2', (isPlatformWeb() ? ' shadow-xl': 'elevation-xl'))}
          source={require('@/assets/images/SelfImage.png')}
          alt={'My Image'}
          style={{
            height:  (isPlatformWeb() ? 400:  280),
            width: (isPlatformWeb() ? 400:  280),
          }}
        />
        <View className={cn(' items-center justify-center', (isPlatformWeb() ? 'w-1/3 ': 'w-full'))}> 
          <ThemedText className={cn('text-2xl  text-center ', (isPlatformWeb() ? 'text-white text-[60px] font-extrabold': 'w-full'))}>Sanket Kokate</ThemedText>
          <ThemedText className={cn('text-2xl text-center ', (isPlatformWeb() ? '': 'w-full'))}>sanketkokate1084@gmail.com</ThemedText>

        </View>
      </Box>
    </ThemedView>
  );
};

export default HomeScreenHeader;
