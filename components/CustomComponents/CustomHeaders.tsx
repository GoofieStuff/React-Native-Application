import React from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {JSX} from 'react/jsx-runtime';
import {LinearGradient} from 'expo-linear-gradient';
import Animated, {FadeInUp, FadeOutUp} from 'react-native-reanimated';

interface CustomHeaderProps  {
  props : object,
}

export const CustomWebHeader = ({props}: CustomHeaderProps): JSX.Element => {
  const insets = useSafeAreaInsets();
  return (
    <View className={' w-full h-14 '} style={{top: insets.top}}>
      <LinearGradient
        className={'w-full h-full items-start justify-center'}
        colors={['transparent', '#E0DEFF']}
        start={{x:1, y:1}}
        end={{x:0, y:0}}
      >
        <Animated.View 
          style={
            {marginLeft : 20}
          }
          entering={FadeInUp.duration(500)}
          exiting={FadeOutUp.duration(500)}
        >
          <Text className={'text-[40px] font-bitcount-light '}>{props?.options?.title || props?.route?.name }</Text>
        </Animated.View>
      </LinearGradient>
    </View>
  );
};

export const CustomAppHeader = ({props}: CustomHeaderProps): JSX.Element => {
  const insets = useSafeAreaInsets();  

  return (
    <View className={'w-full h-14 justify-center items-center '} style={{marginTop:insets.top, marginLeft:insets.left, marginRight:insets.right}}>
      <LinearGradient
        className={'w-full h-full items-start justify-center'}
        colors={['transparent', '#E0DEFF']}
        start={{x:1, y:1}}
        end={{x:0, y:0}}
      >
        <Animated.View 
          style={
            {marginLeft : 20}
          }
          entering={FadeInUp.duration(500)}
          exiting={FadeOutUp.duration(500)}
        >
          <Text className={'text-[30px] font-bitcount-light '}>{props?.options?.title || props?.route?.name }</Text>
        </Animated.View>
      </LinearGradient>
    </View>
  );
};
