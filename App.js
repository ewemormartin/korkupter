import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

export default function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <Header />
      <View style={styles.main}>
        <Body />
      </View>
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  main: {
    flex: 1,
    justifyContent: 'center',
  },
});