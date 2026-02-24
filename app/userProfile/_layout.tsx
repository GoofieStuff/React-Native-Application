import { Stack } from "expo-router";



export default function UserProfileRootLayout() {
    return (
        <Stack>
            <Stack.Screen name="[name]" options={{title:"User Info"}}></Stack.Screen>
        </Stack>
    )
}