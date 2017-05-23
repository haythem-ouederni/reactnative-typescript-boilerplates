import Storage from 'react-native-storage';
import {AsyncStorage} from 'react-native';

// we declare the storage variable
var storage = new Storage({
    // maximum capacity, default 1000
    size: 1000,

    // Use AsyncStorage for RN, or window.localStorage for web. If not set, data
    // would be lost after reload.
    storageBackend: AsyncStorage,

    // expire time, default 1 day(1000 * 3600 * 24 milliseconds). can be null, which
    // means never expire.
    defaultExpires: 1000 * 3600 * 24,

    // cache data in the memory. default is true.
    enableCache: true,

    // if data was not found in storage or expired, the corresponding sync method
    // will be invoked and return the latest data.
    sync: {
        // we'll talk about the details later.
    }
})

/**
 * This is a simple service that saves a (key, value) object into the storage
 * @param key
 * @param data
 */
export function set(key : string, data : any) {
    return storage.save({key, data});
}

/**
 * his is a simple service that gets the object matching the key from the storage
 * @param key
 */
export function get(key : string) {
    return storage.load({key});
}

/**
 * This is a service that saves data into storage using an object of options
 * @param aSavingParameters : the object containg the different parameters concerning the data to save
 */
export function setComplete(aSavingParameters : any) {
    return storage.save(aSavingParameters);
}

/**
 * This is a service that retrieves data from the storage using an object of options
 * @param aSavingParameters : the object containg the different parameters concerning the data to retrieve
 */
export function getComplete(aSavingParameters : any) {
    return storage.load(aSavingParameters);
}