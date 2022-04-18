import { View, Text, Button } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title='Go to User Screen' onPress={() => navigation.navigate("User")}></Button>
    </View>
  )
}

export default HomeScreen