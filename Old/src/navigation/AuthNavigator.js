import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DEFAULT_SCREEN_OPTIONS} from './HeaderStyles';
import {
  CreateAccount,
  ForgetPassword,
  Login,
  ResetPassword,
  SplashScreen,
} from '../screens';
import {MAIN_SCREENS} from '../constants/screens';

const Stack = createNativeStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={MAIN_SCREENS.SPLASH_SCREEN}
      screenOptions={{
        ...DEFAULT_SCREEN_OPTIONS,
        headerShown: false,
      }}>
      <Stack.Screen
        name={MAIN_SCREENS.SPLASH_SCREEN}
        component={SplashScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={MAIN_SCREENS.LOGIN}
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={MAIN_SCREENS.CREATE_ACCOUNT}
        component={CreateAccount}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={MAIN_SCREENS.FORGET_SCREEN}
        component={ForgetPassword}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={MAIN_SCREENS.RESET_PASSWORD}
        component={ResetPassword}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
