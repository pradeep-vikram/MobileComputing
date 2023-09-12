// import { Icon } from 'react-native-vector-icons/Icon';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/home';
import Assignment3 from '../screens/assign3/home';
import Assignment4 from '../screens/assign4/home';
import Assignment5 from '../screens/assign5/home';

const homeNavigation = createNativeStackNavigator();

export default function HomeNavigation(): JSX.Element {
  return (
    <homeNavigation.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}>
      <homeNavigation.Screen name="HomeScreen" component={HomeScreen} />
      <homeNavigation.Screen name="Assignment3" component={Assignment3} />
      <homeNavigation.Screen name="Assignment4" component={Assignment4} />
      <homeNavigation.Screen name="Assignment5" component={Assignment5} />
    </homeNavigation.Navigator>
  );
}
