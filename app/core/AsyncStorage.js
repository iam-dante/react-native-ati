import AsyncStorage from '@react-native-async-storage/async-storage';
/**
 * Stores data to store
 */
export const storeData = async (key, vl) =>{
  try{
      const value = JSON.stringify(vl)
      await AsyncStorage.setItem(key, value);
  }
  catch(e) {
    console.log(e)
    throw e
  }
}
/**
 * Loads data from store
 */
export const getData = async (key) =>{
  try{
    const value =  await AsyncStorage.getItem(key)
    return JSON.parse(value)
  }
  catch(e){
    console.log(e)
    throw e
  }
}
/**
 * Clearing  data from store
 */
export const clearAll = async () => {
  try {
    await AsyncStorage.clear()
  } catch(e) {
    // clear error
  }
  console.log('Done. Clearing all async stored data')
}