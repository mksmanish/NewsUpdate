import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import DetailsCard from '../components/DetailsCard';
import {Button} from 'react-native-paper';

const NewsOverview = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const data = route?.params?.data;

  navigation.setOptions({
    headerRight: () => (
      <Button onPress={() => console.log('pressed')}>Save</Button>
    ),
  });

  return (
    <View>
      <DetailsCard details={data} />
    </View>
  );
};

export default NewsOverview;

const styles = StyleSheet.create({});
