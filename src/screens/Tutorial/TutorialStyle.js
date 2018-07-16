import { StyleSheet } from 'react-native';

const tutorial = StyleSheet.create({
  style1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  style2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    borderStyle: 'solid',
    borderColor: '#ced4da',
    borderWidth: 1,
    borderRadius: 5,
    width: '90%',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  input: {
    marginTop: 15,
    flex: 1,
  },
  button: {
    flex: 1,
    width: '40%',
    marginTop: 25,
  },
});

export default tutorial;
