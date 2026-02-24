import { Link, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

const ThirdScreen = () => {
  const params = useLocalSearchParams();
  const [name, setName] = useState("user")
  console.log('params are : ', params);
  return (
    <View className='w-full h-full bg-green-200 items-center justify-center'>
      <Text>Third Screen</Text>
      <TextInput placeholder='Your name here'  value={name} onChangeText={text=>setName(text)}></TextInput>
      <Link  href={{pathname : '/userProfile/[name]', params:{name: name}}} >
              Go to user profile.
            </Link>
         <Link  href='/' >
              Go to Homepage
            </Link>
    </View>
  )
}

export default ThirdScreen