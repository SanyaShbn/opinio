import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Input } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../../settings/constants/login-styles/LoginPageStyles';
import { Formik } from 'formik';
import logo from "../../settings/images/Logo.png"; 

export default function LoginPage() {

    return (
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.title}>Авторизация</Text>
        <Formik
          initialValues={{ email: '', password: '' }}
        >
          {({
            values,
            isValid,
          }) => (
            <>
              <View style={styles.inputContainer}>
                <Icon name="mail-outline" size={25} style={styles.icon} />
                <Input
                  variant="unstyled"
                  style={styles.input}
                  placeholder="Email"
                  keyboardType="email-address"
                  value={values.email}
                />
              </View>
              <View style={styles.inputContainer}>
                <Icon name="lock-closed-outline" size={25} style={styles.icon} />
                <Input
                  variant="unstyled"
                  style={styles.input}
                  placeholder="Пароль"
                  secureTextEntry
                  value={values.password}
                />
              </View>
              <TouchableOpacity
                style={styles.button}
                disabled={!isValid}
              >
                <Text style={styles.buttonText}>Войти</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.signUp}>
                  Впервые в нашем приложении? <Text style={styles.signUpLink}>Зарегистрироваться</Text>
                </Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </View>
    );
}