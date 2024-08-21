import React from 'react';
import { describe, it, expect } from '@jest/globals';
import { render, fireEvent } from '@testing-library/react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AppColors from '../../../themes/AppColors';
import TodoItem from '../TodoItem';

describe('TodoItem', () => {
  const mockItem = { id: '1', value: 'Test Todo' };
  const mockOnDelete = jest.fn();

  it('renders the todo item text correctly', () => {
    const { getByText } = render(
      <TodoItem item={mockItem} onDelete={mockOnDelete} />,
    );

    expect(getByText('Test Todo')).toBeTruthy();
  });

  it('calls onDelete with the correct id when delete button is pressed', () => {
    const { getByRole } = render(
      <TodoItem item={mockItem} onDelete={mockOnDelete} />,
    );

    const deleteButton = getByRole('deleteButton');
    fireEvent.press(deleteButton);

    expect(mockOnDelete).toHaveBeenCalledWith('1');
  });
});
