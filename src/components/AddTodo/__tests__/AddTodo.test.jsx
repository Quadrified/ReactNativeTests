import React from 'react';
import { it, expect, describe } from '@jest/globals';
import { render } from '@testing-library/react-native';
import AddTodo from '../index';

jest.useFakeTimers();

// !UNIT TEST

/**
 * 3. Basic example
 */
// Can also be it() or test()
// Describe anatomy of a test
//  •	Import Statements: Import necessary modules, components, and utilities.
// 	•	Setup: This might include mock setup, initializing test data, or configuring certain global settings.
// 	•	Test Suites (describe blocks): Group related tests together.
// 	•	Individual Tests (it or test blocks): Define each test case.
// 	•	Assertions: Validate the behavior of your component or function.

describe('Math Utilities', () => {
  // describe => test suite
  it('should add two numbers correctly', () => {
    // test case
    const test = 2 + 2;
    expect(test).toEqual(4); // assertion
  });

  it('should multiply two numbers correctly', () => {
    const test = 12 * 12;
    expect(test).toEqual(144); // assertion
  });
});

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
