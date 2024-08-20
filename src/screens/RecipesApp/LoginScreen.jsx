import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  Pressable,
  Keyboard,
} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import AppColors from '../../themes/AppColors';
import LottieView from 'lottie-react-native';
import { post } from '../../api/api';
import { LOGIN } from '../../api/endpoints';
import ErrorMessage from '../../components/ErrorMessage';

const LoginScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [isError, setIsError] = useState(false);

  const onLogin = async () => {
    if (!username?.trim() || !password?.trim()) {
      setIsError(true);
      return;
    }
    setLoading(true);
    setIsError(false);
    const response = await post(LOGIN, { username, password });
    if (response?.token) {
      setLoading(false);
      setIsError(false);
      navigation.navigate('Dashboard');
      setUsername('');
      setPassword('');
    } else {
      setIsError(true);
      setLoading(false);
    }
  };

  const onDismissKeyboard = () => Keyboard.dismiss();

  return (
    <ScrollView style={styles.container}>
      <LottieView
        autoPlay
        source={require('../../assets/login-animation.json')}
        style={styles.animation}
        loop={false}
      />
      <Pressable onPress={onDismissKeyboard}>
        <Text style={styles.loginHeader}>Welcome back!</Text>
        <TextInput
          mode="outlined"
          value={username}
          placeholder="Enter Username"
          onChangeText={setUsername}
          onSubmitEditing={() => {}}
          theme={{ roundness: 8 }}
          style={styles.input}
        />
        <TextInput
          secureTextEntry
          mode="outlined"
          value={password}
          placeholder="Enter Password"
          onChangeText={setPassword}
          onSubmitEditing={() => {}}
          theme={{ roundness: 8 }}
          style={styles.input}
        />
        <ErrorMessage visible={isError}>
          Please enter a valid username or password
        </ErrorMessage>
        <Button
          uppercase
          mode="contained"
          onPress={onLogin}
          loading={loading}
          style={styles.addButton}
          labelStyle={styles.buttonLabel}
          testID="LoginButton">
          Login
        </Button>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: AppColors.background,
    paddingBottom: 16,
  },
  animation: {
    width: '100%',
    height: 200,
    marginTop: 24,
  },
  loginHeader: {
    marginTop: 16,
    marginBottom: 10,
    color: AppColors.dark,
    fontSize: 26,
  },
  input: {
    marginVertical: 8,
  },
  addButton: {
    borderRadius: 8,
    backgroundColor: AppColors.primary,
    marginVertical: 10,
  },
  buttonLabel: {
    fontSize: 18,
  },
});

export default LoginScreen;
