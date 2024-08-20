import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import ErrorMessage from '../ErrorMessage';
import AppColors from '../../themes/AppColors';

export default function AddTodo({ value, onChange, onAddTodo, error }) {
  return (
    <View style={styles.container}>
      <TextInput
        mode="outlined"
        placeholder="Add a Todo"
        value={value}
        onChangeText={onChange}
        onSubmitEditing={onAddTodo}
        theme={{ roundness: 8 }}
      />
      <ErrorMessage visible={error}>Please enter a valid todo</ErrorMessage>
      <Button
        uppercase
        mode="contained"
        onPress={onAddTodo}
        style={styles.addButton}
        labelStyle={styles.buttonLabel}
        testID="AddTodoButton">
        Add Todo
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  addButton: {
    borderRadius: 8,
    backgroundColor: AppColors.primary,
    marginTop: 12,
  },
  buttonLabel: {
    fontSize: 18,
  },
});
