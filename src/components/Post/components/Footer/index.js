import { View, Text, TouchableWithoutFeedback } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/Entypo';
import IconF from 'react-native-vector-icons/Fontisto';
import IconII from 'react-native-vector-icons/Ionicons';
import IconFA from 'react-native-vector-icons/FontAwesome';

const Footer = ({ likesCount: likesCountProp, caption, postedAt }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setlLikesCount] = useState(0);
  const onLiked = () => {
    const amount = isLiked ? -1 : 1;
    setIsLiked(!isLiked);
    setlLikesCount(likesCount + amount);
  };

  useEffect(() => {
    setlLikesCount(likesCountProp);
  }, [likesCountProp]);

  return (
    <View style={styles.container}>
      <View style={styles.icons}>
        <View style={styles.actions}>
          <TouchableWithoutFeedback onPress={onLiked}>
            {!isLiked ? (
              <Icon name="heart-outlined" size={22} color={'#545454'} />
            ) : (
              <Icon name="heart" size={22} color={'red'} />
            )}
          </TouchableWithoutFeedback>
          <IconF name="comment" size={18} color={'#545454'} />
          <IconII name="paper-plane-outline" size={20} color={'#545454'} />
        </View>
        <View>
          <IconFA name="bookmark-o" size={20} />
        </View>
      </View>
      <View>
        <Text style={styles.likes}>{likesCount} Likes</Text>
        <Text style={styles.caption}>{caption}</Text>
        <Text style={styles.postedAt}>{postedAt}</Text>
      </View>
    </View>
  );
};

export default Footer;
