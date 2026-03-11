import {Link} from 'expo-router';
import Drawer from 'expo-router/drawer';
import {Button, Text, View} from 'react-native';

const Homescreen3 = (): React.JSX.Element => {

  return (
    <>
      <Drawer.Screen options={{title: 'Home3'}} />
      <View className={'w-ful h-full items-center justify-center bg-tertiary-50'}>
        <Text>This is HomeScreen3.</Text>
        <Link href={'/HomeScreen'}>
          <Button title={'Go to HomeScreen'}></Button>
        </Link>
      </View>
    </>
  );
};

export default Homescreen3;
