import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Appbar,
  Chip,
  Button,
  ProgressBar,
  MD2Colors,
  MD3Colors,
} from 'react-native-paper';
import {check, multiply} from '../assets';
import CardsItem from '../components/CardsItem';

const API_KEY = 'pub_29594202de8a8aa61b1085bb700f1edb99349';
const Home = () => {
  const [selectedCategory, SetSelectedCategory] = useState([]);
  const [newsData, setNewsData] = useState();
  const [error, setError] = useState();
  const [nextPage, setnextPage] = useState('');
  const [loading, setLoading] = useState(false);
  const categories = [
    'Technology',
    'Business',
    'Sports',
    'Politics',
    'Health',
    'Food',
    'Science',
    'Environment',
    'Entertainment',
  ];

  const handleSelect = item => {
    SetSelectedCategory(prev =>
      prev.find(p => p === item)
        ? prev.filter(cat => cat !== item)
        : [...prev, item],
    );
  };

  const handleRefresh = async () => {
    const URL = `https://newsdata.io/api/1/news?apikey=${API_KEY}&country=in&language=en${
      selectedCategory.length > 0
        ? `&category=${selectedCategory.join(',')}`
        : ''
    }${nextPage?.length > 0 ? `&page=${nextPage}` : ''}`;
    try {
      setLoading(true);
      await fetch(URL)
        .then(res => res.json())
        .then(data => {
          setNewsData(data?.results);
          setnextPage(data?.nextPage);
          setLoading(false);
        })
        .catch(err => setError(err));
    } catch {
      setLoading(false);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Appbar.Header>
        <Appbar.Content title="News Headlines"></Appbar.Content>
      </Appbar.Header>
      <View style={styles.filterContainer}>
        {categories.map(item => (
          <Chip
            key={item}
            mode="flat"
            style={styles.chipItem}
            textStyle={{fontWeight: '500', padding: 2, color: 'white'}}
            showSelectedOverlay
            selected={selectedCategory.find(c => item === c) ? true : false}
            onPress={() => handleSelect(item)}>
            {item}
          </Chip>
        ))}
        <Button
          mode="contained"
          style={styles.button}
          labelStyle={{fontSize: 14, margin: 'auto'}}
          icon={'sync'}
          onPress={handleRefresh}>
          Refresh
        </Button>
      </View>
      <ProgressBar
        visible={loading}
        style={{height: 5}}
        indeterminate
        color={MD3Colors.error50}
      />
      <FlatList
        keyExtractor={item => item.article_id}
        onEndReached={() => handleRefresh()}
        style={styles.flatlist}
        data={newsData}
        renderItem={({item, index}) => (
          <CardsItem itemData={item} handleDelete={false} />
        )}></FlatList>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  filterContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 10,
  },
  chipItem: {
    marginHorizontal: 5,
    borderRadius: 25,
    margin: 4,
    backgroundColor: 'orange',
  },
  button: {
    maxWidth: 400,
    padding: 0,
    maxHeight: 40,
  },
  flatlist: {
    height: 'auto',
    flex: 1,
  },
});
