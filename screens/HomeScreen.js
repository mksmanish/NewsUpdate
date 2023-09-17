import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import Saved from './Saved';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        options={{
          tabBarIcon(props) {
            return (
              <Icon
                name={props.focused ? 'home-circle' : 'home-circle-outline'}
              />
            );
          },
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen name="Saved" component={Saved} />
    </Tab.Navigator>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
