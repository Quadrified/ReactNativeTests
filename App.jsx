import React from 'react';
import { PaperProvider } from 'react-native-paper';
import Todo from './src/Todo';
import AppTheme from './src/themes/AppTheme';
import { StatusBar } from 'react-native';
import AppColors from './src/themes/AppColors';

const App = () => {
  return (
    <PaperProvider theme={AppTheme}>
      <StatusBar backgroundColor={AppColors.primary} />
      <Todo />
    </PaperProvider>
  );
};

export default App;
