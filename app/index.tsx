import {JSX} from 'react/jsx-runtime';
import Homescreen from './(common)/(homescreen)/HomeScreen';
import ThemedView from '@/components/CustomComponents/ThemedView';
import {ScrollView} from 'react-native';

const Index = ():JSX.Element => {

  return (
    <>
      <ScrollView className={'w-full h-full'}>
        <Homescreen />
      </ScrollView>
    </>
    
  );
};

export default Index;
