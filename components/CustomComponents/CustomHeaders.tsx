import React from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {JSX} from 'react/jsx-runtime';

interface CustomHeaderProps  {
  props : object,
}

export const CustomWebHeader = ({props}: CustomHeaderProps): JSX.Element => {
  const insets = useSafeAreaInsets();
  return (
    <View className={' w-full h-14 justify-center items-center'} style={{top: insets.top}}>
      <View className={'px-5 py-1 rounded-xl  border-4  border-violet-400 shadow-xl bg-transparent'}>
        <Text className={'text-2xl'}>Hello</Text>
      </View>
    </View>
  );
};

export const CustomAppHeader = ({props}: CustomHeaderProps): JSX.Element => {
  const insets = useSafeAreaInsets();
  return (
    <View className={'w-full h-14 justify-center items-center bg-blue-800/50'} style={{marginTop:insets.top, marginLeft:insets.left, marginRight:insets.right}}>
      <View className={'px-5 py-1 rounded-xl shadow-xl bg-transparent'}>
        <Text className={'text-2xl'}>Hello</Text>
      </View>
    </View>
  );
};
