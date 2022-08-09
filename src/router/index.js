import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './bottomTabNavigator.routes';
import StoryScreen from '../screens/StoryScreen';

const RootStack = createNativeStackNavigator();

const Router = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="HomeBottom"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="StoryScreen"
        component={StoryScreen}
        options={{ headerShown: false }}
      />
    </RootStack.Navigator>
  );
};

export default Router;
