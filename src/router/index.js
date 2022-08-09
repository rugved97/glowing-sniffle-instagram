import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DiscoveryScreen from '../screens/DiscoveryScreen';
import PostScreen from '../screens/PostScreen';
import NotificationScreen from '../screens/NotificationScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconsF from 'react-native-vector-icons/Foundation';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import HomeRoutes from './home.routes';

const Tab = createBottomTabNavigator();

const Router = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'HomeStack') {
            return <IconsF name={'home'} size={size} color={color} />;
          }
          if (route.name === 'Discover') {
            return <Feather name={'search'} size={size} color={color} />;
          }
          if (route.name === 'Post') {
            return <Feather name={'plus-square'} size={size} color={color} />;
          }
          if (route.name === 'Notifications') {
            return <Entypo name={'heart-outlined'} size={size} color={color} />;
          }
          if (route.name === 'Profile') {
            return <Ionicons name={'person-outline'} size={size} color={color} />;
          }

          // You can return any component that you like here!
        },
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name="HomeStack" component={HomeRoutes} />
      <Tab.Screen name="Discover" component={DiscoveryScreen} />
      <Tab.Screen name="Post" component={PostScreen} />
      <Tab.Screen name="Notifications" component={NotificationScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default Router;
