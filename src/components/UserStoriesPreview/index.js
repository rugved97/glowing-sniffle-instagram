import React from 'react';
import Story from '../UserStoryPreview';
import { FlatList } from 'react-native';
import styles from './styles';
import StoriesData from '../../data/stories';

const Stories = () => {
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      data={StoriesData}
      keyExtractor={({ user }) => user.id}
      //max-render-per-batch -OPTIMIZATION
      horizontal
      renderItem={({ item }) => <Story story={item} />}
      style={styles.container}
    />
  );
};

export default Stories;
