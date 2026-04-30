import {CustomButton} from '@/components/CustomComponents';
import ThemedView from '@/components/CustomComponents/ThemedView';
import {getShadow, styleMerge} from '@/utilities/Styling';
import React from 'react';
import {Text} from 'react-native';

const index = () => {

  const list = [{key: 'Rank of Matrix Calculator', value: 'matrix'}, {key: 'Stack Visualization', value: 'stack'}];
  return (
    <ThemedView className={'w-full h-full p-5 gap-3'}>
      {list.map((item, index) => (
        <ThemedView 
          key={index} 
          className={styleMerge('w-full h-32 justify-center items-center bg-primary-200 rounded-lg border-2 border-purple-500')}
          style={ getShadow('lg')}
        >
          <CustomButton
            buttonStyle={'w-full h-full border-0 rounded-none'}
            destination={`/DSA/${item?.value}`}
            buttonText={item?.key}
          
          />
         
        </ThemedView>
      ))}
    </ThemedView>
  );
};

export default index;
