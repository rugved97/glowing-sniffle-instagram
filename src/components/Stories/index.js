import React from 'react';
import Story from '../Story';
import { FlatList } from 'react-native';
import styles from './styles';
const data = [
  {
    imageUri: 'https://images.indianexpress.com/2019/01/uri-movie-review-759.jpg',
    name: 'Harsh',
  },
  {
    imageUri: 'https://images.indianexpress.com/2019/01/uri-movie-review-759.jpg',
    name: 'Navina',
  },
  {
    imageUri: 'https://images.indianexpress.com/2019/01/uri-movie-review-759.jpg',
    name: 'Anay',
  },
  {
    imageUri: 'https://images.indianexpress.com/2019/01/uri-movie-review-759.jpg',
    name: 'Shruti',
  },
  {
    imageUri: 'https://images.indianexpress.com/2019/01/uri-movie-review-759.jpg',
    name: 'June',
  },
  {
    imageUri: 'https://images.indianexpress.com/2019/01/uri-movie-review-759.jpg',
    name: 'Slimy',
  },
  {
    imageUri: 'https://images.indianexpress.com/2019/01/uri-movie-review-759.jpg',
    name: 'Yash',
  },
  {
    imageUri: 'https://images.indianexpress.com/2019/01/uri-movie-review-759.jpg',
    name: 'Sri',
  },
];
const Stories = () => {
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      data={data}
      keyExtractor={({ name }) => name}
      //max-render-per-batch -OPTIMIZATION
      horizontal
      renderItem={({ item }) => <Story imageUri={item.imageUri} name={item.name} />}
      style={styles.container}
    />
  );
};

export default Stories;
