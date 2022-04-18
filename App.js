import { View, Text ,SafeAreaView } from 'react-native'
import React from 'react'
import { NavigationContainer  } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './NavigationSample/HomeScreen';
import UserScreen from './NavigationSample/UserScreen';
import SuppliersScreen from './NavigationSample/SuppliersScreen';
import SupplierDetailScreen from './NavigationSample/SupplierDetailScreen';

 const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer> 

      <Stack.Navigator>
       <Stack.Screen name='Supplier' component={SuppliersScreen} />
       <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'anasayfa'}} />
       <Stack.Screen name="User" component={UserScreen} />
       <Stack.Screen name="SupplierDetail" component={SupplierDetailScreen} />

      </Stack.Navigator>

    </NavigationContainer>
  )
}


export default App;