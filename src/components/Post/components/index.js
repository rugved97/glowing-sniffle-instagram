import { View } from 'react-native';
import React from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

const Post = ({ post }) => {
  return (
    <View>
      <Header imageUri={post.user.image} name={post.user.name} />
      <Body imageUri={post.image} />
      <Footer likesCount={post.likes} caption={post.caption} postedAt={post.createdAt} />
    </View>
  );
};

export default Post;
