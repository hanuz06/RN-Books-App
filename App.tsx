import React, { useState } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
// import ReduxThunk from 'redux-thunk';
import { StyleSheet, Text, View } from 'react-native';

const fetchFonts = () => {
  return Font.loadAsync({
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
  });
};

export default function App():JSX.Element {

  const [fontLoaded, setFontLoaded] = useState<boolean>(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
      />
    );
  }
  
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
