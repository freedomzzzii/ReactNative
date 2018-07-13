import { StyleSheet } from 'react-native';

const theme = StyleSheet.create({
  style1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  text1: {
    color: '#1a1a1a',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text2: {
    color: '#1a1a1a',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    borderStyle: 'solid',
    borderColor: '#ced4da',
    borderWidth: 1,
    borderRadius: 5,
  },
  inputIcon: {
    borderStyle: 'solid',
    borderColor: '#ced4da',
    borderWidth: 1,
    borderRadius: 5,
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
});

export default theme;
