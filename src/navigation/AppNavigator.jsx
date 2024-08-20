import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TodoScreen from '../screens/TodoApp/TodoScreen';
import LoginScreen from '../screens/RecipesApp/LoginScreen';
import DashboardScreen from '../screens/RecipesApp/DashboardScreen';

export default function AppNavigator() {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Todo"
        screenOptions={{ animation: 'slide_from_right' }}>
        <Screen
          name="Todo"
          component={TodoScreen}
          options={{ headerShown: false }}
        />
        <Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{ headerShown: false }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
