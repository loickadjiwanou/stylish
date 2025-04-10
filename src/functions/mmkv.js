import { MMKV } from "react-native-mmkv";

// MMKV initialization
export const storage = new MMKV();

// Save data function
export const saveData = (key, value) => {
  try {
    const stringValue =
      typeof value === "string" ? value : JSON.stringify(value);
    storage.set(key, stringValue);
    console.log("Data saved for key ", key);
  } catch (error) {
    console.error(`Something went wrong while saving ${key}: `, error);
  }
};

// Get data function
export const getData = (key) => {
  try {
    const value = storage.getString(key);
    console.log("Data retrieved for key ", key);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.error(`Something went wrong while getting ${key}: `, error);
    return null;
  }
};

// Delete data function
export const deleteData = (key) => {
  try {
    storage.delete(key);
    console.log("Data deleted for key ", key);
  } catch (error) {
    console.error(`Something went wrong while deleting ${key}: `, error);
  }
};

// Check if a key exists
export const containsKey = (key) => {
  return storage.contains(key);
};

// Clear all data
export const clearStorage = () => {
  try {
    storage.clearAll();
    console.log("Storage cleared");
  } catch (error) {
    console.error(
      `Something went wrong while clearing the storage ${key}: `,
      error
    );
  }
};
