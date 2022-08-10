import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import ProfilePicture from '../ProfilePicture';
import styles from './styles';

const Story = props => {
  const {
    story: {
      user: { id, image, name },
    },
  } = props;
  const navigation = useNavigation();
  const onStoryClicked = () => {
    // @ts-ignore
    navigation.navigate('StoryScreen', { userId: id });
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onStoryClicked}>
      <ProfilePicture uri={image} />
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

export default Story;
