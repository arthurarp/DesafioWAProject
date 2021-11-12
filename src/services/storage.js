import AsyncStorage from '@react-native-async-storage/async-storage';

export const getReportFromLocalDatabase = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@report');
    if (jsonValue !== null) {
      return JSON.parse(jsonValue);
    }
  } catch (e) {
    // error reading value
  }
};

export const storeReportDataOnLocalDatabase = async reportData => {
  try {
    const jsonValue = JSON.stringify(reportData);
    await AsyncStorage.setItem('@report', jsonValue);
  } catch (e) {
    // saving error
  }
};

export const getAllKeysFromLocalDatabase = async () => {
  let keys = [];
  try {
    keys = await AsyncStorage.getAllKeys();
    return keys;
  } catch (e) {
    // read key error
  }
};
