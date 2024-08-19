import React from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

export default function ErrorMessage({ children, visible }) {
  return (
    <View style={styles.container}>
      {visible && (
        <Animated.Text
          entering={FadeIn.duration(500)}
          exiting={FadeOut.duration(500)}
          style={styles.text}>
          {children}
        </Animated.Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    margin: 10,
  },
  text: {
    color: 'red',
  },
});
