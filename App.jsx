import React from 'react';
import { StatusBar } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import AppNavigator from './src/navigation/AppNavigator';
import AppTheme from './src/themes/AppTheme';
import AppColors from './src/themes/AppColors';

const App = () => {
  return (
    <PaperProvider theme={AppTheme}>
      <StatusBar backgroundColor={AppColors.primary} />
      <AppNavigator />
    </PaperProvider>
  );
};

export default App;
