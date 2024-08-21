import React from 'react';
import AddTodo from '../index';
import { it, expect } from '@jest/globals';
import { render } from '@testing-library/react-native';

jest.useFakeTimers();

it('should render input with placeholder', () => {
  const { getByPlaceholderText } = render(<AddTodo />);

  const todoInput = getByPlaceholderText('Add a Todo');

  expect(todoInput).not.toBeNull();
});

it('should render button', () => {
  const { getByText } = render(<AddTodo />);

  const addTodoButton = getByText('Add Todo');

  expect(addTodoButton).not.toBeNull();
});
