import { AsyncStorage } from 'react-native';

export async function removeItem(key) {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch(exception) {
    return false;
  }
}

export async function setItem(key, value) {
  try {
    await AsyncStorage.setItem(key, value);
    return true;
  } catch(exception) {
    return false;
  }
}

export async function getItem(key) {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch(exception) {
    return null;
  }
}
