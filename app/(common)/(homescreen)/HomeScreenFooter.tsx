import React from 'react';
import ThemedView from '@/components/CustomComponents/ThemedView';
import {styleMerge} from '@/utilities/Styling';
import ThemedText from '@/components/CustomComponents/ThemedText';
import {CustomButton} from '@/components/CustomComponents';
import {ArrowRight} from 'lucide-react-native';

const HomeScreenFooter = () => {
  return (
    <ThemedView className={styleMerge('w-full h-16 ')}>
      <CustomButton
        buttonText={'Checkout my creations'}
        textStyle={'text-lg'}
        icon={()=> <ArrowRight color={'white'} />}
        buttonStyle={'h-16'}
      />
    </ThemedView>
  );
};

export default HomeScreenFooter;
