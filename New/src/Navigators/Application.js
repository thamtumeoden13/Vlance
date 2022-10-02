import React from 'react';
import { KeyboardAvoidingView, SafeAreaView, StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useTheme } from '@/hooks';
import { StartupContainer } from '@/containers';
import MainNavigator from './DrawerNavigator';
import { navigationRef } from './utils';

const Stack = createStackNavigator();

// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme();
  const { colors } = NavigationTheme;

  return (
    <SafeAreaProvider style={[Layout.fill, { backgroundColor: colors.card }]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
      >
        {/* <SafeAreaView style={[Layout.fill, { backgroundColor: colors.card }]}> */}
        <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
          <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              headerBackTitle: '',
              headerBackTitleVisible: false,
              headerBackVisible: false,
            }}
          >
            <Stack.Screen name="Startup" component={StartupContainer} />
            <Stack.Screen
              name="Main"
              component={MainNavigator}
              options={{
                animationEnabled: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
        {/* </SafeAreaView> */}
      </KeyboardAvoidingView>
    </SafeAreaProvider>
  );
};

export default ApplicationNavigator;
