# Books app
A user can see all books, book details, as well as search books by categories, save and remove favorite books, create account and login. Books and favorite books are stored in Firebase Realtime Database.

!["React Native Books app in action"](/assets/images/rn-books-app.gif)

## Downloading the project

Fork and clone this repo. It is recommended to install Android Studio Emulator as instructed 👉 in [expo-android-studio-emulator](https://docs.expo.io/workflow/android-studio-emulator/) or iOS Simulator as instructed 👉 in [expo-iOS-emulator](https://docs.expo.io/workflow/ios-simulator/). The following instruction is for Android Studio. 

## Install Expo CLI

```sh
npm install -g expo-cli
```

## Running the project

Open a virtual device in Android Studio.

```sh
cd react-native-visits-app
expo start
```

In the opened new window (usually on localhost:19002), click on the "Run on $(your device)" section to run app on the smartphone simulator or web.

## Dependencies

- Node 12.x or above
- NPM 5.x or above
- formik ^2.1.4
- yup ^0.28.5
- react-redux ^7.2.0
- redux-thunk ^^2.3.0
- react-native
- react-navigation/native ^5.2.4
- expo ~37.0.8
- moment 2.25.3
- typescript ~3.8.3
- Firebase 