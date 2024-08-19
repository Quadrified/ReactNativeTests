import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Animated, { SlideInRight } from 'react-native-reanimated';
import AppColors from '../../themes/AppColors';

export default function TodoItem({ item, onDelete }) {
  const onDeleteItem = () => onDelete(item.id);

  return (
    <Animated.View
      entering={SlideInRight.duration(500)}
      style={styles.container}>
      <Text adjustsFontSizeToFit style={styles.todoItemText}>
        {item.value}
      </Text>
      <Pressable onPress={onDeleteItem}>
        <MaterialCommunityIcons
          name="delete"
          size={24}
          color={AppColors.error}
        />
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    marginVertical: 5,
    borderWidth: 1.5,
    borderColor: AppColors.primary,
    borderRadius: 8,
  },
  todoItemText: {
    color: AppColors.dark,
    marginLeft: 10,
    fontSize: 16,
    textAlign: 'left',
  },
});
