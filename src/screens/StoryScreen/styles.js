import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  image: {
    flex: 1,
    justifyContent: 'space-between',
    resizeMode: 'cover',
  },
  userInfo: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    fontWeight: '600',
    fontSize: 16,
    color: 'white',
  },
  postedTime: {
    fontSize: 14,
    color: 'grey',
    marginLeft: 10,
    fontWeight: '600',
  },
  bottomActions: {
    flexDirection: 'row',
    marginBottom: 20,
    marginHorizontal: 10,
  },
  cameraButton: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 50,
  },
  messageButton: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 50,
    marginHorizontal: 10,
    height: 50,
    paddingHorizontal: 10,
  },
  textInput: {
    height: '100%',
    color: 'white',
    fontSize: 16,
  },
});

export default styles;
