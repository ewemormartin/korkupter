import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => (
  <View style={styles.header}>
    <Text style={styles.title}>HENGER TÉRFOGATSZÁMÍTÁS</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: '#000', // Fekete háttér
    alignItems: 'center',
  },
  title: {
    color: '#fff', // Fehér szöveg - maximális kontraszt
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Header;