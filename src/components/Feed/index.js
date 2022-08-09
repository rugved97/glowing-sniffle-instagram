import { FlatList } from 'react-native';
import React from 'react';
import Post from '../Post/components';
import Stories from '../Stories';
const data = [
  {
    user: {
      imageUri: 'https://images.indianexpress.com/2019/01/uri-movie-review-759.jpg',
      name: 'Anay',
    },
    imageUri: 'https://www.thephoblographer.com/wp-content/uploads/2019/05/P3021961.jpg',
    caption: 'Me going to my fride',
    likesCount: 1234,
    postedAt: '6 minutes ago',
  },
  {
    user: {
      imageUri: 'https://images.indianexpress.com/2019/01/uri-movie-review-759.jpg',
      name: 'Anay',
    },
    imageUri: 'https://www.thephoblographer.com/wp-content/uploads/2019/05/P3021961.jpg',
    caption: 'Me going to my fride',
    likesCount: 1234,
    postedAt: '6 minutes ago',
  },
  {
    user: {
      imageUri: 'https://images.indianexpress.com/2019/01/uri-movie-review-759.jpg',
      name: 'Anay',
    },
    imageUri: 'https://www.thephoblographer.com/wp-content/uploads/2019/05/P3021961.jpg',
    caption: 'Me going to my fride',
    likesCount: 1234,
    postedAt: '6 minutes ago',
  },
];

const Feed = () => {
  return (
    <FlatList
      data={data}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={() => <Stories />}
      renderItem={({ item }) => <Post post={item} />}
    />
  );
};

export default Feed;