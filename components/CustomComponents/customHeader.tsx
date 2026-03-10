import React from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {JSX} from 'react/jsx-runtime';

interface CustomHeaderProps  {
  props : object,
}

export const CustomHeader = ({props}: CustomHeaderProps): JSX.Element => {
  const insets = useSafeAreaInsets();
  console.log(insets);
  return (
    <View className={'absolute w-full h-14 bg-gray-500/40'} style={{top: insets.top}}>
      <Text className={'text-2xl'}>Hello</Text>
    </View>
  );
};
