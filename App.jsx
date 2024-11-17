import React from 'react';

import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { HISTORY, HOME } from './app/settings/api/navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './app/(tabs)/home';

const Tab = createBottomTabNavigator()

export default function App() {
  return ( <NativeBaseProvider>
    
    <NavigationContainer>
      <Tab.Navigator initialRouteName={HOME}>

          <Tab.Screen name={HOME} component={<Home/>}/>
          <Tab.Screen name={HISTORY} component={<History/>}/>
      </Tab.Navigator>

    </NavigationContainer>

  </NativeBaseProvider> );
}