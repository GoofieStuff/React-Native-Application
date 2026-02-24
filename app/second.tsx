import { Link } from 'expo-router'
import React from 'react'
import { Button, Text, View } from 'react-native'

const SecondScreen = () => {
  return (
    <View className='w-full h-full bg-blue-200 items-center justify-center'>
      <Text>Second Screen</Text>
      <Link  href='/' >
        Go to Homepage
      </Link>
      <Link href={{ pathname : '/third', params : {name : 'Sanket'}} } push asChild >
      <Button title='Go to Third Screen'></Button>
      </Link>
    </View>
  )
}

export default SecondScreen