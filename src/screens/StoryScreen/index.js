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
import styles from './styles';
import ProfilePicture from '../../components/ProfilePicture';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { API, graphqlOperation } from 'aws-amplify';

import { listStories } from '../../graphql/queries';

const StoryScreen = () => {
  const [userStories, setUserStories] = useState(null);
  const [activeStoryIndex, setActiveStoryIndex] = useState(null);
  const route = useRoute();
  const navigation = useNavigation();
  // @ts-ignore
  const userId = route.params.userId;

  console.log(userId);
  const fetchStories = async () => {
    try {
      const storiesData = await API.graphql(graphqlOperation(listStories));
      setUserStories(storiesData.data.listStories.items);
      console.log('here, ', storiesData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStories();
    setActiveStoryIndex(0);
  }, []);

  useEffect(() => {
    if (!userStories) {
      return;
    }
    if (activeStoryIndex < 0) {
      setActiveStoryIndex(0);
      return;
    }

    if (activeStoryIndex > userStories.length) {
      setActiveStoryIndex(userStories.length - 1);
      return;
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeStoryIndex]);

  const navigateToNextUser = () => {
    // @ts-ignore
    //Old implementation, userID were serial
    navigation.push('StoryScreen', { userId: (parseInt(userId, 10) + 1).toString() });
  };
  const navigateToPreviousUser = () => {
    // @ts-ignore
    //Old implementation, userID were serial
    navigation.push('StoryScreen', { userId: (parseInt(userId, 10) - 1).toString() });
  };

  const handleNextStory = () => {
    if (activeStoryIndex >= userStories.length - 1) {
      // navigateToNextUser();
      return;
    }
    setActiveStoryIndex(activeStoryIndex + 1);
  };

  const handlePreviousStory = () => {
    if (activeStoryIndex < 0) {
      // navigateToPreviousUser();
      return;
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

  if (!userStories || userStories.length === 0) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  const activeStory = userStories[activeStoryIndex];

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={handlePress}>
        <ImageBackground source={{ uri: activeStory.image }} style={styles.image}>
          <View style={styles.userInfo}>
            <ProfilePicture uri={activeStory.user.image} size={50} />
            <Text style={styles.userName}>{activeStory.user.name}</Text>
            <Text style={styles.postedTime}>{activeStory.createdAt}</Text>
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
