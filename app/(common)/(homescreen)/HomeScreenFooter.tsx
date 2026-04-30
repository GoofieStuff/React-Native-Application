import React from 'react';
import ThemedView from '@/components/CustomComponents/ThemedView';
import {styleMerge} from '@/utilities/Styling';
import {CustomButton} from '@/components/CustomComponents';
import {ArrowRight} from 'lucide-react-native';
import {web} from '@/utilities/CommonFunctions';

const HomeScreenFooter = () => {
  return (
    <ThemedView className={styleMerge('w-full justify-center items-center h-16 ')}>
      <CustomButton
        buttonText={'Checkout my creations'}
        textStyle={'text-xl'}
        icon={web? null : (()=> <ArrowRight color={'white'} />)}
        buttonStyle={styleMerge('h-16 ', (web? 'w-[50%]' : 'w-full'))}
        destination={'/DSA'}
      />
    </ThemedView>
  );
};

export default HomeScreenFooter;
