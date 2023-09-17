import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import {Button, Card, useTheme} from 'react-native-paper';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';

const CardsItem = ({itemData, handleDelete}) => {
  const theme = useTheme();
  const navigation = useNavigation();
  const handlePressable = () => {
    navigation.navigate('Overview', {data: itemData});
  };

  return (
    <Pressable onPress={itemData => handlePressable(itemData)}>
      <Card
        style={{
          marginVertical: 10,
          backgroundColor: theme.colors.elevation.leve4,
          marginBottom: 5,
        }}>
        <Card.Cover
          borderRadius={15}
          source={{
            uri:
              itemData?.image_url !== null
                ? itemData?.image_url
                : 'https://cdn.pixabay.com/photo/2014/05/21/22/28/old-newspaper-350376_1280.jpg',
          }}
        />
        <Card.Title
          title={itemData?.title}
          subtitle={
            itemData?.description != null
              ? itemData?.description.split('\n')[0]
              : ''
          }
          titleNumberOfLines={2}></Card.Title>
        <Card.Content>
          <Text style={{color: 'white', marginTop: 5}}>
            {moment(itemData?.pubDate).format('DD-MMM-YYYY HH:mm')}
          </Text>
        </Card.Content>
        {handleDelete && (
          <Card.Actions>
            <Button>Delete</Button>
          </Card.Actions>
        )}
      </Card>
    </Pressable>
  );
};

export default memo(CardsItem);
