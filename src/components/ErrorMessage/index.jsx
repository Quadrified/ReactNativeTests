import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ErrorMessage({ children, visible }) {
  if (!visible) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    margin: 5,
  },
  text: {
    color: 'red',
  },
});
