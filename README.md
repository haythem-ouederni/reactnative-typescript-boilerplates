# Firebase Example Specific Information

This branch uses the basics of the [master branch] of the project and contains [firebase](https://firebase.google.com/) related information on how to add it to a `ReactNative` project with a working example.

[This tutorial](https://firebase.googleblog.com/2016/01/the-beginners-guide-to-react-native-and_84.html) was followed to add firebase to this project.

1 - Install Firebase

```` yarn
yarn add firebase
````

2 - Creating a Firebase database

Create your `Firebase` database via the [Firebase console](https://console.firebase.google.com).

The structure of the data is as follows : 

* `todos` is the table's name
* each element of the `todos` table in addition to its id has 2 attributes : `label` (required) and `state` (not required) as you can se in the image below

![alt text](https://res.cloudinary.com/dytqwkbym/image/upload/v1503847129/rntutorial-firabase-database-example.png "firebase database screenshot")

3 - Configure Firebase

After creating a `Firebase` database via the [Firebase console](https://console.firebase.google.com), you should instanciate your firebase instance that will be used through all the application :

```` typescript
import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
    apiKey: <<you api key>>,
    authDomain: <<you auth domain>>,
    databaseURL: <<you database url>>,
    storageBucket: <<you stoage bucket>>
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);

export const database = firebaseApp.database();
````

In this project, the different information related to the Firebase database are put withn an `.env` file on the root of the project. The `.env` file content look like the following: 

```` text
API_KEY = your-api-key
AUTH_DOMAIN = your-auth-domain.firebaseapp.com
DATABASE_URL = https://your-auth-domain.firebaseio.com
STORAGE_BUCKET = your-auth-domain.appspot.com;
````

Those information are accessed using the [React Native config](https://github.com/luggit/react-native-config) module.

```` typescript
import Config from 'react-native-config';

// the firebase constants
export const FIREBASE_API_KEY = Config.API_KEY;
````

4 - Use the Firebase database you have created/set

    a - Import it in your file

```` typescript
import {database} from 'your/path/to/firebase/config';
````

    b - Use it in your file

```` typescript
database
  .ref('yourEtity')
  .on('value', (snap) => {
      // do things here ...
  });
````

Nb : This branch of the project is not 100% complete but the basic information on how to use firebase within a reactnative project are here. For the moment only the display of information is implemented. Creation and edition are to come soon. 

# Swipable list items
The [react-native-swipe-list-view](https://github.com/jemise111/react-native-swipe-list-view) library was used to make the list of TODO elements swipable.

# The base project
You can find the basic project used to build this firebase project at the [master branch].

# Adding the icons

The [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) librairy is used for this project to use Icons. Some manual setup is needed over the Android and iOS projects as indicated [here](https://github.com/oblador/react-native-vector-icons).


[master branch]: https://github.com/haythem-ouederni/reactnative-typescript-boilerplates/tree/master