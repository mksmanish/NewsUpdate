import {StyleSheet, Text, View, Alert, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Appbar, Card} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';
import CardsItem from '../components/CardsItem';

const Saved = () => {
  const focuses = useIsFocused();
  const [savedNews, setSavedNews] = useState([]);
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

  useEffect(() => {
    getData()
      .then(res => setSavedNews(res))
      .catch(error => console.log('error fetching the error'));
  }, [focuses]);

  return (
    <View style={styles.mainContainer}>
      <Appbar.Header>
        <Appbar.Content title="Local Stored"></Appbar.Content>
      </Appbar.Header>
      <ScrollView>
        {savedNews &&
          savedNews.length > 0 &&
          savedNews.map(item => (
            <CardsItem itemData={item} handleDelete={true} />
          ))}
      </ScrollView>
    </View>
  );
};

export default Saved;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
