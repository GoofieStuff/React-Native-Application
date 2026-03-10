import {Text, View} from 'react-native';
import React from 'react';
import {JSX} from 'react/jsx-runtime';
import Homescreen from './HomeScreen';
import {SafeAreaView} from 'react-native-safe-area-context';

const index = ():JSX.Element => {
  return (
    <SafeAreaView>
      <Homescreen />
    </SafeAreaView>
  );
};

export default index;
