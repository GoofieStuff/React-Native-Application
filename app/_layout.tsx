import '@/global.css';
import { Stack } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { Platform, useWindowDimensions } from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout() {
  const windowDimensions = useWindowDimensions();
  const isSmallScreen = windowDimensions.width < 800;

  return (
    <GestureHandlerRootView style={{ flex: 1 }} >
      {Platform.OS === 'web' ? (
        <Drawer backBehavior='firstRoute'
          drawerContent={(props) => {
            console.log('prps : ', props)
            return (<></>)
          }}
          screenOptions={{
            drawerType: (isSmallScreen ? 'front' : 'slide'),
            overlayColor: 'transparent',
            drawerStyle: {
              width: isSmallScreen ? '40%' : "300px",
              shadowRadius: 5,
              shadowOpacity: 0.5
            }

          }} />
      ) : (
        <Stack />
      )
      }
    </GestureHandlerRootView >
  );
}