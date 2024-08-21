/**
 * 1. Test Cases
 */
// Create Todo item

// Create Multiple Todo Items

// Delete Todo Item

// Show error message on empty input

// Error message should disappear once a valid item is created

/**
 * 2. Import stuff
 */
import React from 'react';
import { it, expect, describe } from '@jest/globals';
import { render, fireEvent } from '@testing-library/react-native';
import TodoScreen from '../TodoScreen';

// Very Important to add because it uses
jest.useFakeTimers();

/**
 * 3. Basic example
 */
// Can also be it() or test()
// Describe anatomy of a test
describe('Math Utilities', () => {
  it('should add two numbers correctly', () => {
    const test = 2 + 2;
    expect(test).toEqual(4); // assertion
  });

  it('should multiply two numbers correctly', () => {
    const test = 12 * 12;
    expect(test).toEqual(144); // assertion
  });
});

/**
 * Actual tests
 */
describe('TodoScreen', () => {
  // Create Todo item
  it('should create a Todo item', () => {
    /**
     * 4. 1st Test case Basic example
     */

    const { getByText, getByPlaceholderText } = render(<TodoScreen />);

    const addTodoItemButton = getByText('Add Todo');
    const todoInput = getByPlaceholderText('Add a Todo');

    const newTodoItem = 'Pick up groceries';

    fireEvent.changeText(todoInput, newTodoItem);
    fireEvent.press(addTodoItemButton);

    const createdTodoItem = getByText(newTodoItem);

    expect(createdTodoItem).not.toBeNull();
  });

  // Create Multiple Todo Items
  it('should create multiple Todo items', () => {
    const { getByText, getByPlaceholderText } = render(<TodoScreen />);

    const addTodoItemButton = getByText('Add Todo');
    const todoInput = getByPlaceholderText('Add a Todo');

    const firstTodoItem = 'Pick up groceries';
    const secondTodoItem = 'Create React Native Testing Guide';

    fireEvent.changeText(todoInput, firstTodoItem);
    fireEvent.press(addTodoItemButton);

    fireEvent.changeText(todoInput, secondTodoItem);
    fireEvent.press(addTodoItemButton);

    const firstCreatedTodoItem = getByText(firstTodoItem);
    const secondCreatedTodoItem = getByText(secondTodoItem);

    expect(firstCreatedTodoItem).not.toBeNull();
    expect(secondCreatedTodoItem).not.toBeNull();
  });

  // Delete Todo Item
  it('should delete a Todo item', () => {
    const { getByText, getByPlaceholderText, getByRole, queryByText } = render(
      <TodoScreen />,
    );

    const addTodoItemButton = getByText('Add Todo');
    const todoInput = getByPlaceholderText('Add a Todo');

    const newTodoItem = 'Pick up groceries';

    fireEvent.changeText(todoInput, newTodoItem);
    fireEvent.press(addTodoItemButton);

    const createdTodoItem = getByText(newTodoItem);

    expect(createdTodoItem).not.toBeNull();

    const deleteTodoButton = getByRole('deleteButton');
    fireEvent.press(deleteTodoButton);

    // getBy vs queryBy => getBy... query methods fail (throws error) when there is no matching element (null) but queryBy... methods don’t throw an error when no element (null) is found. We don’t want to get error from the line of fetching element. We want to get the error from the last line of TEST suit that is “expect”. So use queryBy... method instead of getBy....

    // if we use getBy it will error out the test before assertion (expect) because item does not exist in the todo list
    // queryBy does not fail test before assertion (expect)
    const deletedItem = queryByText(newTodoItem);

    expect(deletedItem).toBeNull();
  });

  // Show error message on empty input
  it('should show error message on empty input', () => {
    const { getByText } = render(<TodoScreen />);

    const addTodoItemButton = getByText('Add Todo');

    fireEvent.press(addTodoItemButton);

    const errorMessage = getByText('Please enter a valid todo');

    expect(errorMessage).not.toBeNull();
  });

  // Error message should disappear once a valid item is created
  it('should show remove error message on adding valid input', () => {
    const { getByText, getByPlaceholderText, queryByDisplayValue } = render(
      <TodoScreen />,
    );

    const addTodoItemButton = getByText('Add Todo');

    fireEvent.press(addTodoItemButton);

    const todoInput = getByPlaceholderText('Add a Todo');

    const newTodoItem = 'Pick up groceries';

    fireEvent.changeText(todoInput, newTodoItem);
    fireEvent.press(addTodoItemButton);

    const errorMessage = queryByDisplayValue('Please enter a valid todo');

    expect(errorMessage).toBeNull();
  });

  // Navigation from Todo to Recipes screen

  it('should navigate to Login screen on pressing food icon', () => {
    const navigation = { navigate: jest.fn() };

    const { getByRole } = render(<TodoScreen navigation={navigation} />);

    const recipesLoginButton = getByRole('RecipesLoginButton');
    fireEvent.press(recipesLoginButton);

    expect(navigation.navigate).toHaveBeenCalledWith('Login');
  });
});
