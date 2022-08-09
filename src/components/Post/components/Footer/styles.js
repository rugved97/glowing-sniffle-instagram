import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  actions: {
    flexDirection: 'row',
    width: 80,
    justifyContent: 'space-between',
  },
  likes: {
    fontWeight: 'bold',
    margin: 3,
  },
  caption: {
    margin: 3,
  },
  postedAt: {
    color: '#0c0c0c',
    margin: 3,
  },
});

export default styles;
