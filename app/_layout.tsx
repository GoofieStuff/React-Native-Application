import '@/global.css';
import {SplashScreen, Stack} from 'expo-router';
import {Drawer} from 'expo-router/drawer';
import {Platform,  useWindowDimensions} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {CustomAppHeader,  CustomWebHeader} from '@/components/CustomComponents';
import {useFonts} from 'expo-font';
import {useEffect} from 'react';
import {hideAsync} from 'expo-router/build/utils/splash';
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const windowDimensions = useWindowDimensions();
  const isSmallScreen = windowDimensions.width < 800;

  const [fontsLoaded, fontError] = useFonts({
    'Bitcount-Thin': require('../assets/fonts/BitcountGrid/BitcountGridSingle_Roman-Thin.ttf'),
    'Bitcount-ExtraLight': require('../assets/fonts/BitcountGrid/BitcountGridSingle_Roman-ExtraLight.ttf'),
    'Bitcount-Light': require('../assets/fonts/BitcountGrid/BitcountGridSingle_Roman-Light.ttf'),
    'Bitcount-Regular': require('../assets/fonts/BitcountGrid/BitcountGridSingle_Roman-Regular.ttf'),
    'Bitcount-Medium': require('../assets/fonts/BitcountGrid/BitcountGridSingle_Roman-Medium.ttf'),
    'Bitcount-SemiBold': require('../assets/fonts/BitcountGrid/BitcountGridSingle_Roman-SemiBold.ttf'),
    'Bitcount-Bold': require('../assets/fonts/BitcountGrid/BitcountGridSingle_Roman-Bold.ttf'),
    'Bitcount-ExtraBold': require('../assets/fonts/BitcountGrid/BitcountGridSingle_Roman-ExtraBold.ttf'),
    'Bitcount-Black': require('../assets/fonts/BitcountGrid/BitcountGridSingle_Roman-Black.ttf'),
  });

  useEffect(()=>{
    if(fontsLoaded || fontError){
      SplashScreen.hideAsync();
    }

  }, [fontsLoaded, fontError]);
  
  if (!fontsLoaded && !fontError) {
    return null; // The SplashScreen remains visible while returning null
  }

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      {Platform.OS === 'web' ? (
        <Drawer backBehavior={'firstRoute'}
         
          screenOptions={{
            header:props=>{
              return (
                <CustomWebHeader props={props} />
              );
            },
            drawerType: (isSmallScreen ? 'front' : 'slide'),
            overlayColor: 'transparent',
            drawerStyle: {
              width: isSmallScreen ? '40%' : '300px',
              shadowRadius: 5,
              shadowOpacity: 0.5,
            },

          }} />
      ) : (
        <Stack 
          screenOptions={
            {
              header:props=>{
                return (
                  <CustomAppHeader props={props} />
                );
              },
            }
          }
        />
      )
      }
    </GestureHandlerRootView>
  );
}
