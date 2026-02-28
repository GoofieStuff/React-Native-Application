import Drawer from "expo-router/drawer";
import { Text, View } from "react-native";

interface HomeScreenProps {

}

const Homescreen = (props: HomeScreenProps): React.JSX.Element => {

    return (
        <>
            <Drawer.Screen name="index" />
            <View className={'w-full h-full items-center justify-center '}>
                <Text>This is HomeScreen.</Text>
            </View>
        </>
    );
}

export default Homescreen;