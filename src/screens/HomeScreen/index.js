import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feed from '../../components/Feed';

const post = {
  user: {
    imageUri: 'https://images.indianexpress.com/2019/01/uri-movie-review-759.jpg',
    name: 'Anay',
  },
  imageUri: 'https://www.thephoblographer.com/wp-content/uploads/2019/05/P3021961.jpg',
  caption: 'Me going to my fride',
  likesCount: 1234,
  postedAt: '6 minutes ago',
};
const HomeScreen = () => {
  return (
    <>
      <Feed />
      {/* <Post post={post} /> */}
    </>
  );
};

export default HomeScreen;
