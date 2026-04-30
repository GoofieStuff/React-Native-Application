import React from 'react';
import {Stack} from 'expo-router';
const _layout = () => {
  return (
    <Stack screenOptions={{
      contentStyle: {
        backgroundColor : '#f0f5f7',
      },
      headerShown: false,
    }}>
    </Stack>
  );
};

export default _layout;
