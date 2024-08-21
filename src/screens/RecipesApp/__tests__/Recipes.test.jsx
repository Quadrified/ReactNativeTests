import React from 'react';
import { it, expect, describe, afterEach } from '@jest/globals';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import LoginScreen from '../LoginScreen';
import { post } from '../../../api/api';

// Very Important to add
jest.useFakeTimers();

// Mock the post function
jest.mock('../../../api/api', () => ({
  post: jest.fn(),
}));

describe('LoginScreen', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render login screen', () => {
    const { getByText, getByPlaceholderText } = render(<LoginScreen />);

    const usernamePlaceholder = getByPlaceholderText('Enter Username');
    const passwordPlaceholder = getByPlaceholderText('Enter Password');
    const loginButton = getByText('Login');

    expect(usernamePlaceholder).toBeTruthy();
    expect(passwordPlaceholder).toBeTruthy();
    expect(loginButton).toBeTruthy();
  });

  it('should show error message on invalid input', () => {
    const { getByPlaceholderText, getByText } = render(<LoginScreen />);

    fireEvent.changeText(getByPlaceholderText('Enter Username'), '');
    fireEvent.changeText(getByPlaceholderText('Enter Password'), '');

    // Press the login button
    fireEvent.press(getByText('Login'));

    const errorMessage = getByText('Please enter a valid username or password');

    expect(errorMessage).toBeTruthy();
  });

  it('should log in and navigate to the Dashboard when the token is returned', async () => {
    const navigation = { navigate: jest.fn() };

    post.mockResolvedValueOnce({ token: 'fakeToken' });

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

// Snapshot test => Snapshots help you detect unexpected changes in the UI output of your components.
// First run snapshot test, then modify ant text, run snapshot test again
describe('LoginScreen Snapshot Test', () => {
  it('renders correctly according to the snapshot', () => {
    const { toJSON } = render(<LoginScreen />);
    expect(toJSON()).toMatchSnapshot();
  });
});
