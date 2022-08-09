import {
  ImageBackground,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Dimensions,
  Text,
  View,
  TextInput,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import storiesData from '../../data/stories';
import styles from './styles';
import ProfilePicture from '../../components/ProfilePicture';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

const StoryScreen = () => {
  const [userStories, setUserStories] = useState(null);
  const [activeStoryIndex, setActiveStoryIndex] = useState(null);
  const [activeStory, setActiveStory] = useState(null);
  const route = useRoute();
  const navigation = useNavigation();
  // @ts-ignore
  const userId = route.params.userId;

  console.log(userId);

  useEffect(() => {
    const story = storiesData.find(storyData => storyData.user.id === userId);

    setUserStories(story);
    setActiveStoryIndex(0);
    // @ts-ignore
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!userStories) {
      return;
    }
    if (activeStoryIndex < 0) {
      setActiveStoryIndex(0);
      return;
    }

    if (activeStoryIndex > userStories.stories.length) {
      setActiveStoryIndex(userStories.stories.length - 1);
      return;
    }
    setActiveStory(userStories.stories[activeStoryIndex]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeStoryIndex]);

  const navigateToNextUser = () => {
    // @ts-ignore
    navigation.push('StoryScreen', { userId: (parseInt(userId, 10) + 1).toString() });
  };
  const navigateToPreviousUser = () => {
    // @ts-ignore
    navigation.push('StoryScreen', { userId: (parseInt(userId, 10) - 1).toString() });
  };

  const handleNextStory = () => {
    if (activeStoryIndex >= userStories.stories.length - 1) {
      navigateToNextUser();
    }
    setActiveStoryIndex(activeStoryIndex + 1);
  };

  const handlePreviousStory = () => {
    if (activeStoryIndex < 0) {
      navigateToPreviousUser();
    }
    setActiveStoryIndex(activeStoryIndex - 1);
  };
  const handlePress = event => {
    const pressLocation = event.nativeEvent.locationX;
    const screenWidth = Dimensions.get('window').width;

    if (pressLocation < screenWidth / 2) {
      handlePreviousStory();
    } else {
      handleNextStory();
    }
  };

  if (!activeStory) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={handlePress}>
        <ImageBackground source={{ uri: activeStory.imageUri }} style={styles.image}>
          <View style={styles.userInfo}>
            <ProfilePicture uri={userStories.user.imageUri} size={50} />
            <Text style={styles.userName}>{userStories.user.name}</Text>
            <Text style={styles.postedTime}>{activeStory.postedTime}</Text>
          </View>
          <View style={styles.bottomActions}>
            <View style={styles.cameraButton}>
              <Feather name={'camera'} size={30} color={'#fff'} />
            </View>
            <View style={styles.textInputContainer}>
              <TextInput
                editable
                placeholder="Send a Message"
                placeholderTextColor={'white'}
                style={styles.textInput}
              />
            </View>
            <View style={styles.messageButton}>
              <Ionicons name="paper-plane-outline" size={35} color={'#fff'} />
            </View>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default StoryScreen;
