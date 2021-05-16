//import { StatusBar } from 'expo-status-bar';
//import React from 'react';
//import { StyleSheet, Text, View } from 'react-native';

//export default function App() {
  //return (
    //<View style={styles.container}>
      //<Text>Open up App.js to start working on your app!</Text>
      //<StatusBar style="auto" />
    //</View>
  //);
//}

//const styles = StyleSheet.create({
  //container: {
    //flex: 1,
    //backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  //},
//});

import React from 'react';
 import { PersistGate } from 'redux-persist/integration/react';
 import { persistor, store } from './src/navigator/persistor';
 import {  Provider } from 'react-redux';
 import { StyleSheet, Text, View } from 'react-native';
 import AppContainer from './src/navigator/stack';
 export default function App() {
   return ( 
     <Provider store={store}>
       <PersistGate persistor={persistor}>
     <AppContainer />
     </PersistGate>
     </Provider>
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