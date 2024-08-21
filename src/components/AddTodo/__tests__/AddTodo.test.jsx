import React from 'react';
import { it, expect, describe } from '@jest/globals';
import { render } from '@testing-library/react-native';
import AddTodo from '../index';

jest.useFakeTimers();

// !UNIT TEST

describe('render AddTodo component', () => {
  it('should render input with placeholder', () => {
    const { getByPlaceholderText } = render(<AddTodo />);

    const todoInput = getByPlaceholderText('Add a Todo');

    expect(todoInput).toBeTruthy();
  });

  it('should render button', () => {
    const { getByText } = render(<AddTodo />);

    const addTodoButton = getByText('Add Todo');

    expect(addTodoButton).toBeTruthy();
  });
});
