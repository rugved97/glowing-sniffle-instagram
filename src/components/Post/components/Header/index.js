import { View, Text } from 'react-native';
import React from 'react';
import ProfilePicture from '../../../ProfilePicture';
import styles from './styles';
import Icon from 'react-native-vector-icons/Entypo';

const Header = ({ imageUri, name }) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <ProfilePicture uri={imageUri} size={40} />
        <Text style={styles.name}>{name}</Text>
      </View>

      <View>
        <Icon name="dots-three-vertical" size={20} />
      </View>
    </View>
  );
};

export default Header;
