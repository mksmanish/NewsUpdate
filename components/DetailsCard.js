import {Dimensions, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {Card, Text, useTheme} from 'react-native-paper';
import moment from 'moment';

const DetailsCard = ({details}) => {
  const theme = useTheme();
  function removeEmojis(text) {
    // Regular expression to match emojis (including skin tone modifiers)
    const emojiRegex =
      /[\uD83C-\uDBFF\uDC00-\uDFFF\uD83D\uDE00-\uDE4F\uD83D\uDE80-\uDEFF]/g;

    // Use the replace method to replace all emoji characters with an empty string
    return text.replace(emojiRegex, '');
  }

  return (
    <View style={{padding: 5}}>
      <ScrollView>
        <Text style={{color: 'black'}} variant="headlineMedium">
          {details?.title}
        </Text>
        <Card
          style={{
            backgroundColor: theme.colors.background,
          }}
          contentStyle={{width: '95%'}}>
          <Card.Cover
            borderRadius={15}
            source={{
              uri:
                details?.image_url !== null
                  ? details?.image_url
                  : 'https://cdn.pixabay.com/photo/2014/05/21/22/28/old-newspaper-350376_1280.jpg',
            }}
          />
          <Card.Title
            style={{fontSize: 15}}
            title={details?.title}
            subtitle={
              details?.description != null
                ? details?.description.split('\n')[0]
                : ''
            }
            titleNumberOfLines={2}></Card.Title>
          <Card.Content>
            <Text style={{color: 'white', marginTop: 5, fontSize: 25}}>
              {moment(details?.pubDate).format('DD-MMM-YYYY HH:mm')}
            </Text>
          </Card.Content>
          <Card.Content>
            <Text style={{color: 'white', marginTop: 20, fontSize: 20}}>
              {details?.content}
            </Text>
          </Card.Content>
        </Card>
      </ScrollView>
    </View>
  );
};

export default DetailsCard;

const styles = StyleSheet.create({});
