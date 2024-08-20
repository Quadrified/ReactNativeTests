import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AppColors from '../../themes/AppColors';

const DashboardScreen = props => {
  return (
    <View style={styles.container}>
      <Text>DashboardScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppColors.background,
  },
});

export default DashboardScreen;
