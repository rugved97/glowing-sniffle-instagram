import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';

import React from 'react';

const HomeRoutes = () => {
  const HomeStack = createNativeStackNavigator();
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Instagram',
          headerLeft: () => {
            return (
              <View style={{ marginLeft: 10 }}>
                <Feather name={'camera'} size={25} color={'#000'} />
              </View>
            );
          },
          headerRight: () => {
            return <Ionicons name="paper-plane-outline" size={25} color={'#545454'} />;
          },
        }}
      />
    </HomeStack.Navigator>
  );
};
export default HomeRoutes;
