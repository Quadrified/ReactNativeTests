import React from 'react';
import { it, expect, describe } from '@jest/globals';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import LoginScreen from '../LoginScreen';

// Very Important to add
jest.useFakeTimers();

it('should render login screen', () => {
  const { getByText, getByPlaceholderText } = render(<LoginScreen />);

  const usernamePlaceholder = getByPlaceholderText('Enter Username');
  const passwordPlaceholder = getByPlaceholderText('Enter Password');
  const loginButton = getByText('Login');

  expect(usernamePlaceholder).not.toBeNull();
  expect(passwordPlaceholder).not.toBeNull();
  expect(loginButton).not.toBeNull();
});

// Mock the fetch API
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        token: 'fake-token-123',
        // other data if needed
      }),
  }),
);

describe('LoginScreen', () => {
  it('should log in and navigate to the Dashboard when the token is returned', async () => {
    const navigation = { navigate: jest.fn() };
    const { getByPlaceholderText, getByText } = render(
      <LoginScreen navigation={navigation} />,
    );

    // Fill out the login form
    fireEvent.changeText(getByPlaceholderText('Enter Username'), 'emilys');
    fireEvent.changeText(getByPlaceholderText('Enter Password'), 'emilyspass');

    // Press the login button
    fireEvent.press(getByText('Login'));

    // Wait for the API call to resolve and navigation to occur
    await waitFor(() => {
      expect(navigation.navigate).toHaveBeenCalledWith('Dashboard');
    });
  });
});
