import Drawer from 'expo-router/drawer';
import {ScrollView} from 'react-native';
import HomeScreenHeader from './HomeScreenHeader';
import {Box} from '@/components/ui/box';

const Homescreen= (): React.JSX.Element => {

  return (
    <>
      <ScrollView className={'w-full h-full'}>
        <Drawer.Screen options={{title: 'Home'}} />
        <Box className={'w-full h-full items-center p-2 gap-5'}>
          <HomeScreenHeader />
        </Box>
      </ScrollView>
    </>

  );
};

export default Homescreen;
