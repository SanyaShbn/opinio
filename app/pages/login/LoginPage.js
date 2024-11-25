import React, { useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, Image, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Input } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../../settings/constants/login-styles/LoginPageStyles';
import logo from "../../settings/images/Logo.png"; 

export default function LoginPage() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const validateLogin = useCallback((login) => {
    const loginRegex = /^[a-zA-Z]+$/;
    if (!login) {
      setErrorMessage('Поле логин не должно быть пустым');
      return false;
    } else if (!loginRegex.test(login)) {
      setErrorMessage('Логин должен содержать только латинские буквы');
      return false;
    }
    setErrorMessage('');
    return true;
  }, []);

  const validatePassword = useCallback((password) => {
    const passwordRegex = /^[a-zA-Z]+$/;
    if (!password) {
      setErrorMessage('Поле пароль не должно быть пустым');
      return false;
    } else if (!passwordRegex.test(password)) {
      setErrorMessage('Пароль должен содержать только латинские буквы');
      return false;
    }
    setErrorMessage('');
    return true;
  }, []);

  const handleLogin = useCallback(() => {
    const isLoginValid = validateLogin(login);
    const isPasswordValid = validatePassword(password);

    if (isLoginValid && isPasswordValid) {
      console.log({ login, password });
      // Логика авторизации
    }
  }, [login, password, validateLogin, validatePassword]);

  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.title}>Авторизация</Text>
          <View style={styles.inputContainer}>
            <Icon name="person-outline" size={25} style={styles.icon} />
            <Input
              variant="unstyled"
              style={styles.input}
              placeholder="Логин"
              value={login}
              onChangeText={(text) => { 
                setLogin(text); 
                validateLogin(text); 
              }}
            />
          </View>
          <View style={styles.inputContainer}>
            <Icon name="lock-closed-outline" size={25} style={styles.icon} />
            <Input
              variant="unstyled"
              style={styles.input}
              placeholder="Пароль"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={(text) => { 
                setPassword(text);
                validatePassword(text);
              }}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIconContainer}> 
              <Icon name={showPassword ? "eye-off-outline" : "eye-outline"} size={25} style={styles.eyeIcon} /> 
            </TouchableOpacity>
          </View>
          {errorMessage ? (
            <Text style={styles.errorText}>{errorMessage}</Text>
          ) : null}
          <TouchableOpacity
            style={styles.button}
            onPress={handleLogin}
          >
            <Text style={styles.buttonText}>Войти</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.signUp}>
              Впервые в нашем приложении? <Text style={styles.signUpLink}>Зарегистрироваться</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}