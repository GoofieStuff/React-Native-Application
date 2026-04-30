import '@/global.css';
import {SplashScreen, Stack} from 'expo-router';
import {Drawer} from 'expo-router/drawer';
import {Platform,  useWindowDimensions} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {CustomAppHeader,  CustomWebHeader} from '@/components/CustomComponents';
import {useFonts} from 'expo-font';
import {useEffect} from 'react';
import {configureReanimatedLogger} from 'react-native-reanimated';
SplashScreen.preventAutoHideAsync();

configureReanimatedLogger({
  strict: false,
});

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
    'Nunito-Black': require('../assets/fonts/Nunito/Nunito-Black.ttf'),
    'Nunito-Bold': require('../assets/fonts/Nunito/Nunito-Bold.ttf'),
    'Nunito-ExtraBold': require('../assets/fonts/Nunito/Nunito-ExtraBold.ttf'),
    'Nunito-Light': require('../assets/fonts/Nunito/Nunito-Light.ttf'),
    'Nunito-Medium': require('../assets/fonts/Nunito/Nunito-Medium.ttf'),
    'Nunito-Regular': require('../assets/fonts/Nunito/Nunito-Regular.ttf'),
    'Nunito-SemiBold': require('../assets/fonts/Nunito/Nunito-SemiBold.ttf'),
    'Nunito-Italic-Bold': require('../assets/fonts/Nunito/Nunito-BoldItalic.ttf'),
    'Nunito-Italic': require('../assets/fonts/Nunito/Nunito-Italic.ttf'),
    'Nunito-Italic-SemiBold': require('../assets/fonts/Nunito/Nunito-SemiBoldItalic.ttf'),
    'SairaStencil-Thin' : require('../assets/fonts/SairaStencil/SairaStencil-Thin.ttf'),
    'SairaStencil-ExtraLight' : require('../assets/fonts/SairaStencil/SairaStencil-ExtraLight.ttf'),
    'SairaStencil-Light' : require('../assets/fonts/SairaStencil/SairaStencil-Light.ttf'),
    'SairaStencil-Medium' : require('../assets/fonts/SairaStencil/SairaStencil-Medium.ttf'),
    'SairaStencil-SemiBold' : require('../assets/fonts/SairaStencil/SairaStencil-SemiBold.ttf'),
    'SairaStencil-Bold' : require('../assets/fonts/SairaStencil/SairaStencil-Bold.ttf'),
    'SairaStencil-Black' : require('../assets/fonts/SairaStencil/SairaStencil-Black.ttf'),
  });

  // useRouteLogger();

  useEffect(()=>{
    if(fontsLoaded || fontError){
      SplashScreen.hideAsync();
    }
    if(fontError){
    }
    if(fontsLoaded){
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
              contentStyle: {
                backgroundColor : '#f0f5f7',
              },
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
