# Firebase Example Specific Information

This block contains firebase related information on how to add it to a React Native project with a working example.

The [following tutorial](https://firebase.googleblog.com/2016/01/the-beginners-guide-to-react-native-and_84.html) was followed to add firebase to this project.

1 - Install Firebase

```` yarn
yarn add firebase
````

2 - Configure Firebase

After creating a Firebase database via the [Firebase console](https://console.firebase.google.com), you should instanciate your firebase instance that will be used throw all the application :

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

3 - Use the Firebase databse you have created

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

# Swipable list items
The [react-native-swipe-list-view](https://github.com/jemise111/react-native-swipe-list-view) library was used to make the list of TODO elements swipable.

# The base project
You can find the basic project used to build this firebase project [here](@todo)

# Adding the icons

The [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) librairy is used for this project to use Icons. Some manual setup is needed over the Android and iOS projects as indicated [here](https://github.com/oblador/react-native-vector-icons).