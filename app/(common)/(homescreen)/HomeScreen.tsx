import Drawer from 'expo-router/drawer';
import {Text, View} from 'react-native';

const Homescreen = (): React.JSX.Element => {

  return (
    <>
      <Drawer.Screen options={{title: 'Home'}} />
      <View className={'w-full bg-blue-500 h-full items-center justify-center '}>
        <Text>This is HomeScreen.</Text>
      </View>
    </>
  );
};

export default Homescreen;
