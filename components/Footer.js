import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => (
  <View style={styles.footer}>
    <Text style={styles.bold}>Név: Ewemor Martin</Text>
    <Text style={styles.bold}>Csoport: Szoft II N</Text>
    <Text style={styles.bold}>Dátum: 2026.03.18</Text>
  </View>
);

const styles = StyleSheet.create({
  footer: {
    borderTopWidth: 3,
    padding: 20,
    alignItems: 'center',
  },
  bold: {
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default Footer;