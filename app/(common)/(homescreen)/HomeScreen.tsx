import Drawer from 'expo-router/drawer';
import {Box} from '@/components/ui/box';
import {styleMerge} from '@/utilities/Styling';
import HomeScreenWebInfo from './(info)/HomeScreenWebInfo';
import HomeScreenAppInfo from './(info)/HomeScreenAppInfo';
import HomeScreenHeader from './HomeScreenHeader';
import {web} from '@/utilities/CommonFunctions';
import HomeScreenFooter from './HomeScreenFooter';
import {Text} from 'react-native';

const Homescreen= (): React.JSX.Element => {

  return (
    <>
      <Drawer.Screen options={  {title: 'PoRtFoLio'}} />
      <Box className={styleMerge('lg:w-4/5 bg-tertiary-50 w-full self-center android:w-full h-full  gap-5')}>
        <HomeScreenHeader />
        {web ? 
          <HomeScreenWebInfo />
          : (
            <>
              <HomeScreenAppInfo />
             
            </>
          )}
        <HomeScreenFooter />
      </Box>
    </>

  );
};

export default Homescreen;
