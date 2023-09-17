import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import DetailsCard from '../components/DetailsCard';

const NewsOverview = () => {
  const route = useRoute();
  const data = route?.params?.data;
  return (
    <View>
      <DetailsCard details={data} />
    </View>
  );
};

export default NewsOverview;

const styles = StyleSheet.create({});
