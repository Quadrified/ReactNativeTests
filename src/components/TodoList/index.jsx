import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import TodoItem from './TodoItem';

export default function TodoList({ data, onDelete }) {
  const renderItem = ({ item }) => <TodoItem item={item} onDelete={onDelete} />;

  return (
    <FlatList
      data={data}
      style={styles.container}
      renderItem={renderItem}
      keyExtractor={item => String(item.id)}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});
