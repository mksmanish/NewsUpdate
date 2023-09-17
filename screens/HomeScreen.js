import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import Saved from './Saved';
import TabIcon from '../components/TabIcon';
import {homeBold, homeOutline, moreBold, moreOutline} from '../assets';

const HomeScreen = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="."
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <TabIcon
              label={'Home'}
              focused={focused}
              icon={focused ? homeBold : homeOutline}
            />
          ),
        }}
      />
      <Tab.Screen
        name=".."
        component={Saved}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <TabIcon
              label="Saved"
              focused={focused}
              icon={focused ? moreBold : moreOutline}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
