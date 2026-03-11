import {Link} from 'expo-router';
import Drawer from 'expo-router/drawer';
import {Button, Text, View} from 'react-native';

const Homescreen2 = (): React.JSX.Element => {

  return (
    <>
      <Drawer.Screen options={{title: 'Home2'}} />
      <View className={'w-ful h-full items-center justify-center bg-tertiary-50'}>
        <Text>This is HomeScreen2.</Text>
        <Link href={'/HomeScreen3'}>
          <Button title={'Go to HomeScreen3'}></Button>
        </Link>
      </View>
    </>
  );
};

export default Homescreen2;
