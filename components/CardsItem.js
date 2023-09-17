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
                : 'https://media.istockphoto.com/id/1221950506/vector/live-breaking-news-headline-with-blue-and-red-color-background.jpg?s=2048x2048&w=is&k=20&c=ciQyOPrg2T8Pav0yC12j4izKrG6SpI3lbJEbaCCAXR8=',
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
