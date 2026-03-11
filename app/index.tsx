import {JSX} from 'react/jsx-runtime';
import Homescreen from './(common)/(homescreen)/HomeScreen';
import ThemedView from '@/components/CustomComponents/ThemedView';

const Index = ():JSX.Element => {

  return (
    <ThemedView className={' w-full h-full'}>
      <Homescreen />
    </ThemedView>

  );
};

export default Index;
