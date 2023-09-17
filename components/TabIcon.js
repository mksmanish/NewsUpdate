import React from 'react';
import {View, Text, Image} from 'react-native';

const TabIcon = ({focused, icon, label}) => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Image
        source={icon}
        resizeMode="contain"
        style={{
          height: 25,
          width: 25,
          tintColor: focused ? 'green' : 'gray',
        }}
      />
      <Text
        style={{
          color: focused ? 'green' : 'gray',
          fontSize: 10,
        }}>
        {label}
      </Text>
    </View>
  );
};

export default TabIcon;
