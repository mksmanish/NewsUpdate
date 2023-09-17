import {StyleSheet, Text, View, Alert} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import DetailsCard from '../components/DetailsCard';
import {Button} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NewsOverview = () => {
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@news');
      if (value !== null) {
        // value previously stored
        return JSON.parse(value);
      }
    } catch (e) {
      // error reading value
      Alert.alert('something went wrong');
      return;
    }
  };

  const storeData = async value => {
    const data = (await getData()) || [];
    !data.find(d => d.title === value.title) ? data.push(value) : data;
    try {
      const jsonValue = JSON.stringify(data);
      await AsyncStorage.setItem('@news', jsonValue);
      console.log('data saved succesfully');
    } catch (e) {
      // saving error

      console.log('error in saving the data');
      return Alert.alert('something went wrong');
    }
  };

  const route = useRoute();
  const navigation = useNavigation();
  const data = route?.params?.data;

  navigation.setOptions({
    headerRight: () => <Button onPress={() => storeData(data)}>Save</Button>,
  });

  return (
    <View>
      <DetailsCard details={data} />
    </View>
  );
};

export default NewsOverview;

const styles = StyleSheet.create({});
