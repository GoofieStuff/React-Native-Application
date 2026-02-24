import { useLocalSearchParams } from "expo-router"
import { Text, View } from "react-native"

const UserProfileScreen=()=>{
    const {name} = useLocalSearchParams()
    return (
        <View className={'w-full h-full bg-pink-400'}>
            <Text> Hello {name.toString()}</Text>
        </View>
    )
}

export default UserProfileScreen;