import Drawer from 'expo-router/drawer';
import {ScrollView} from 'react-native';
import HomeScreenHeader from './HomeScreenHeader';
import {Box} from '@/components/ui/box';
import {cn} from '@/utilities/Styling';

const Homescreen= (): React.JSX.Element => {

  return (
    <>
      <Drawer.Screen options={{title: 'Home'}} />
      <ScrollView className={'w-full h-full '}>
        <Box className={cn('lg:w-4/5 w-full self-center android:w-full h-full  p-2 gap-5')}>
          <HomeScreenHeader />
        </Box>
      </ScrollView>
    </>

  );
};

export default Homescreen;
