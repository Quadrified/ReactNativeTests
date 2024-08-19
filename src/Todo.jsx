import React, { useState } from 'react';
import { View, StyleSheet, Pressable, Keyboard, Text } from 'react-native';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import AppColors from './themes/AppColors';

export default function Todo() {
  const [listInput, setListInput] = useState('');
  const [list, setList] = useState([]);
  const [error, setError] = useState(false);

  const handleInput = text => {
    setListInput(text);
  };

  const onAddTodo = () => {
    if (!listInput) {
      setError(true);
      return;
    }

    const newTodo = {
      id: Math.random() * 1000,
      value: listInput,
    };

    setList([newTodo, ...list]);
    setListInput('');
    setError(false);
  };

  const handleDelete = id => setList(list.filter(item => item.id !== id));

  const onDismissKeyboard = () => Keyboard.dismiss();

  return (
    <Pressable onPress={onDismissKeyboard} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Todo List</Text>
      </View>
      <View style={styles.inputArea}>
        <AddTodo
          onAddTodo={onAddTodo}
          value={listInput}
          onChange={handleInput}
          error={error}
        />
      </View>
      <View style={styles.listArea}>
        <TodoList data={list} onDelete={handleDelete} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.background,
  },
  header: {
    backgroundColor: AppColors.primary,
    padding: 15,
  },
  headerText: {
    color: AppColors.white,
    fontSize: 24,
  },
  inputArea: {
    marginVertical: 16,
    marginHorizontal: 10,
  },
  listArea: {
    flex: 1,
    paddingHorizontal: 15,
    alignItems: 'center',
    marginVertical: 15,
  },
});
