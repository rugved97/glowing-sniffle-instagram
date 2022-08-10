import React, { useEffect, useState } from 'react';
import Story from '../UserStoryPreview';
import { FlatList } from 'react-native';
import styles from './styles';
import StoriesData from '../../data/stories';
import { API, graphqlOperation } from 'aws-amplify';
import { listStories } from '../../graphql/queries';

const Stories = () => {
  const [stories, setStories] = useState([]);
  const fetchStories = async () => {
    try {
      const storiesData = await API.graphql(graphqlOperation(listStories));

      setStories(storiesData.data.listStories.items);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchStories();
  }, []);

  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      data={stories}
      keyExtractor={({ user }) => user.id}
      //max-render-per-batch -OPTIMIZATION
      horizontal
      renderItem={({ item }) => <Story story={item} />}
      style={styles.container}
    />
  );
};

export default Stories;
