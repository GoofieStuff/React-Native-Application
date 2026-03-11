import React from 'react';
import {JSX} from 'react/jsx-runtime';
import Homescreen from './(common)/(homescreen)/HomeScreen';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View} from 'react-native';

const index = ():JSX.Element => {
  return (
    <SafeAreaView className={'h-full w-full'}>
      <View className={'w-full h-full'}>
        <Homescreen />
      </View>
    </SafeAreaView>
  );
};

export default index;
