import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const Index = () => {
  return (
    <View className='w-full h-full bg-red-200 items-center justify-center'>
      <Text>Index</Text>
      <Link href={'/second'} push>
      Go to Second
      </Link>
      
    </View>
  )
}

export default Index