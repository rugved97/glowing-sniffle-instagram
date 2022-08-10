import { FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import Post from '../Post/components';
import Stories from '../UserStoriesPreview';
import { API, graphqlOperation } from 'aws-amplify';

import { listPosts } from '../../graphql/queries';
const data = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
  const [posts, setPosts] = useState([]);
  const fetchPosts = async () => {
    try {
      const postData = await API.graphql(graphqlOperation(listPosts));
      console.log(postData);
      setPosts(postData.data.listPosts.items);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <FlatList
      data={posts}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={() => <Stories />}
      renderItem={({ item }) => <Post post={item} />}
      keyExtractor={({ id }) => id.toString()}
    />
  );
};

export default Feed;
