import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeNavigation from './home';

const mainStack = createNativeStackNavigator();

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <mainStack.Navigator>
        <mainStack.Screen
          name="HomeNavigationStack"
          component={HomeNavigation}
          options={{headerShown: false}}
        />
      </mainStack.Navigator>
    </NavigationContainer>
  );
}
