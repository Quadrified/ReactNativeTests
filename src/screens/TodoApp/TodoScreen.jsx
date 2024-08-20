import React, { useState } from 'react';
import { View, StyleSheet, Pressable, Keyboard, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AddTodo from '../../components/AddTodo';
import TodoList from '../../components/TodoList';
import AppColors from '../../themes/AppColors';

export default function TodoScreen({ navigation }) {
  const [listInput, setListInput] = useState('');
  const [list, setList] = useState([]);
  const [error, setError] = useState(false);

  const handleInput = text => {
    setListInput(text);
  };

  const onAddTodo = () => {
    if (!listInput) {
      setError(true);
      console.log('No input');
      return;
    }

    const newTodo = {
      id: Math.random() * 1000,
      value: listInput,
    };

    setList([newTodo, ...list]);
    setListInput('');
    setError(false);

    console.log(`Added todo => ${listInput}`);
  };

  const handleDelete = id => {
    console.log(
      `Deleted todo item => ${list.find(item => item.id === id).value}`,
    );
    setList(list.filter(item => item.id !== id));
  };

  const onDismissKeyboard = () => Keyboard.dismiss();

  const goToRecipesApp = () => navigation.navigate('Login');

  return (
    <Pressable onPress={onDismissKeyboard} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Todo List</Text>
        <Pressable role="RecipesLoginButton" onPress={goToRecipesApp}>
          <Ionicons name="fast-food-sharp" size={24} color={AppColors.white} />
        </Pressable>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
