import {CustomButton} from '@/components/CustomComponents';
import ThemedView from '@/components/CustomComponents/ThemedView';
import {getShadow, styleMerge} from '@/utilities/Styling';
import React from 'react';

const index = () => {

  const list = [
    {key: 'Rank of Matrix Calculator', value: '/DSA/Matrix'},
    {key: 'Stack Visualization', value: '/DSA/Stack/Stack'},
    {key: 'Site map', value: '_sitemap'},
  ];
  return (
    <ThemedView className={'w-full h-full p-5 gap-3'}>
      {list.map((item, index) => (
        <ThemedView 
          key={index} 
          className={styleMerge('w-full  h-32 justify-center items-center bg-primary-200 rounded-xl  border-2 border-purple-500')}
          style={ getShadow('lg')}
        >
          <CustomButton
            buttonStyle={'w-full h-full border-0 rounded-none bg-primary-400 rounded-xl active:scale-110 transition-all duration-200'}
            destination={`${item?.value}`}
            buttonText={item?.key}
            textStyle={'text-white font-nunito-bold text-2xl'}
          />
         
        </ThemedView>
      ))}
    </ThemedView>
  );
};

export default index;
